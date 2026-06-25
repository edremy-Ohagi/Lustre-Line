# AI Feature Plan

This file records possible AI features for 南望玉叙. These are not part of the frontend MVP unless explicitly requested.

## Current Decision

Do not integrate OpenAI API in the first MVP.

Reason:

- The first priority is a polished mobile-first product showcase.
- Product content and founder feedback are more important than AI automation right now.
- AI features become useful after product data, brand tone, and admin workflows are clear.

## Candidate AI Features

### 1. Product Copy Generator

Generate product names, short descriptions, detail descriptions, and scene copy.

Possible inputs:

```text
category
material
gemstone
style
price
target customer
usage scene
```

Expected structured output:

```json
{
  "name": "string",
  "shortDescription": "string",
  "longDescription": "string",
  "sceneTags": ["string"],
  "sellingPoints": ["string"]
}
```

### 2. Xiaohongshu Copy Assistant

Generate soft-selling Xiaohongshu-style product notes.

Constraints:

- Avoid exaggerated claims.
- Avoid fake user testimonials.
- Keep tone gentle and refined.
- Mention material and style accurately.

### 3. Product Data Cleanup

Normalize manually entered product data from the founder into structured fields.

Example:

```text
Input: "珍珠手链，18k金，适合送礼，大概1280"
Output: structured product draft
```

### 4. Image-Based Description Draft

Use product images to draft initial descriptions.

Human review is required before publishing.

### 5. Customer Service Drafting

Draft replies for consultation questions.

The system should not automatically send messages. Human approval is required.

### 6. Content Safety And Quality Review

Review product copy for:

- exaggerated claims
- unclear material descriptions
- inconsistent prices
- tone mismatch
- missing fields

## Recommended OpenAI Approach Later

For simple one-step features:

```text
Responses API
Structured Outputs
```

For multi-step admin workflows:

```text
Agents SDK
tool calling
human approval
trace / eval loop
```

For recurring quality checks:

```text
small eval set
expected structured fields
manual review samples
```

## Safety And Product Rules

- AI-generated product text must be reviewed before publishing.
- Do not let AI invent material, gemstone, origin, price, certification, stock, or delivery promises.
- AI suggestions must preserve the brand tone: 轻奢温柔.
- AI should return structured JSON for admin workflows, not freeform text blobs.
- Any customer service AI feature should be draft-only unless a later policy explicitly approves automation.

## Suggested Eval Cases

Create test cases for:

1. Product with fixed RMB price.
2. Product with `询问价格`.
3. Product with multiple labels.
4. Custom jewelry product.
5. Product missing material.
6. Product with vague founder notes.
7. Product copy that sounds too promotional.
8. Product copy that invents unsupported claims.

## Not Planned For MVP

- AI chat customer service
- automatic publishing to Xiaohongshu
- automatic product upload from images
- automatic pricing
- payment or order automation
