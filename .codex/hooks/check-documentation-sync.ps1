$ErrorActionPreference = "Stop"

if ($env:DOC_SYNC_CHECK_DISABLE -eq "1") {
  Write-Output "[doc-sync] Skipped because DOC_SYNC_CHECK_DISABLE=1."
  exit 0
}

try {
  $repoRoot = (git rev-parse --show-toplevel 2>$null).Trim()
} catch {
  Write-Output "[doc-sync] Not inside a git repository; skipped."
  exit 0
}

if (-not $repoRoot) {
  Write-Output "[doc-sync] Git repository root not found; skipped."
  exit 0
}

$statusLines = git -C $repoRoot status --porcelain

if (-not $statusLines) {
  Write-Output "[doc-sync] Working tree is clean."
  exit 0
}

function Get-ChangedPath {
  param([string] $Line)

  if ($Line.Length -lt 4) {
    return ""
  }

  $path = $Line.Substring(3).Trim()

  if ($path -like "* -> *") {
    $path = ($path -split " -> ")[-1].Trim()
  }

  $path = $path.Trim('"')
  return ($path -replace "\\", "/")
}

$changedPaths = @()
foreach ($line in $statusLines) {
  $path = Get-ChangedPath -Line $line
  if ($path) {
    $changedPaths += $path
  }
}

$docPatterns = @(
  "AGENTS.md",
  "README.md",
  "docs/",
  "assets/brand/README.md"
)

$implementationPatterns = @(
  ".codex/",
  ".github/",
  "apps/",
  "services/",
  "infra/",
  "scripts/",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "npm-shrinkwrap.json",
  "vite.config.",
  "tsconfig",
  "Dockerfile",
  "docker-compose"
)

function Test-PathMatchesAnyPattern {
  param(
    [string] $Path,
    [string[]] $Patterns
  )

  foreach ($pattern in $Patterns) {
    if ($pattern.EndsWith("/")) {
      if ($Path.StartsWith($pattern)) {
        return $true
      }
    } elseif ($Path -eq $pattern -or $Path.StartsWith($pattern)) {
      return $true
    }
  }

  return $false
}

$docChanged = $false
$implementationChanged = $false
$implementationChangedPaths = @()

foreach ($path in $changedPaths) {
  if (Test-PathMatchesAnyPattern -Path $path -Patterns $docPatterns) {
    $docChanged = $true
  }

  if (Test-PathMatchesAnyPattern -Path $path -Patterns $implementationPatterns) {
    $implementationChanged = $true
    $implementationChangedPaths += $path
  }
}

if (-not $implementationChanged) {
  Write-Output "[doc-sync] No implementation/config changes detected; documentation sync check passed."
  exit 0
}

if ($docChanged) {
  Write-Output "[doc-sync] Implementation/config changes detected and documentation changed; sync check passed."
  exit 0
}

Write-Output "[doc-sync] Documentation sync may be missing."
Write-Output "[doc-sync] Implementation/config changes detected without docs updates:"
foreach ($path in $implementationChangedPaths) {
  Write-Output "[doc-sync] - $path"
}
Write-Output "[doc-sync] Check docs/documentation-sync-policy.md and update docs, or explain why no docs sync is needed."

exit 2
