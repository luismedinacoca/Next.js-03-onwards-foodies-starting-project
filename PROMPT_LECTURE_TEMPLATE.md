# Documentation Completion Prompt Template

## Task Description

Focus on this content from the documentation file:

## 🔧 X. Lesson XXX — *[LESSON_TITLE]*

### 🧠 X.1 Context:

[CONTEXT_PLACEHOLDER_OR_EMPTY]

### ⚙️ X.2 Updating code according the context:

[EXISTING_CODE_EXAMPLES_AND_EXPLANATIONS]

### 🐞 X.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 X.4 Pending Fixes (TODO)

- [ ]

in this file: `docs/LECTURE_STEPS.md`

Then complete context, issues and pending fixes task (TODO).

---

## Instructions

1. **Read the specified section** from `docs/LECTURE_STEPS.md` (Lesson X - [LESSON_TITLE])
2. **Review the existing code examples** and understand what the lesson covers
3. **Summarize Existing Code & Examples**:
   - Carefully read the section `[EXISTING_CODE_EXAMPLES_AND_EXPLANATIONS]`, including:
      - The entire **X.2 Updating code according to the context** section
      - Each nested subsection **X.2.Y** (e.g., X.2.1, X.2.2, etc.)
   - Produce **concise, high-level summaries** at two levels:
   **X.2 Section Summary**
   - Add a short overview as the **first subsection inside X.2**
   - Explain:
      - The overall purpose of X.2
      - What problem this part of the lesson is solving
      - How the different X.2.Y subsections relate to each other
   **X.2.Y Subsection Summaries**
   - For **each X.2.Y subsection**, prepend a brief summary explaining:
      - What the specific code or example does (or attempts to do)
      - Its primary responsibility within the lesson
      - Key patterns, libraries, or concepts involved
   - Keep each summary short (2–5 bullet points max)

   - Do **not** rewrite, refactor, or optimize the code
   - Ignore low-level implementation details unless they are critical to understanding behavior
   - If images, diagrams, or screenshots are present:
      - Infer their intent
      - Summarize what they illustrate or clarify
   - Summaries must be clearly separated from the original content and labeled as:
      - **Summary**
      - **Subsection Summary**

4. **Examine the actual codebase** to identify current implementation state and potential issues
5. **Complete the Context section (X.1)**:
   - Provide a comprehensive explanation of the concept/topic
   - Explain when and why it's used
   - Include examples from the project
   - List advantages and disadvantages
   - Mention when to consider alternatives
6. **Complete the Issues section (X.3)**:
   - Review the codebase for actual problems related to the lesson topic
   - Identify inconsistencies, bugs, or code quality issues
   - Fill in the issues table with:
     - Issue description
     - Status (⚠️ Identified, ✅ Fixed, ℹ️ Low Priority, etc.)
     - Log/Error details or explanation
7. **Complete the Pending Fixes (TODO) section (X.4)**:
   - Create actionable TODO items based on identified issues
   - Include specific file paths and line numbers when relevant
   - Prioritize tasks appropriately
   - Make tasks specific and measurable

## Expected Output Format

### Context Section Should Include:
- Definition and explanation of the concept
- When it occurs/is used
- Examples from the project
- Advantages and disadvantages
- When to consider alternatives
- Connection to the lesson's practical implementation

### Issues Table Should Include:
- **Issue name**: Brief descriptive title
- **Status**: Current state (⚠️ Identified, ✅ Fixed, etc.)
- **Log/Error**: Detailed explanation, file paths, line numbers, and impact

### TODO List Should Include:
- [ ] Specific, actionable tasks
- [ ] File paths and component names
- [ ] Clear descriptions of what needs to be done
- [ ] Prioritization indicators if needed

## Notes

- Maintain consistency with the existing documentation style
- Use code references when mentioning specific files or components
- Be thorough but concise
- Focus on practical, actionable items
- All content should be in English

