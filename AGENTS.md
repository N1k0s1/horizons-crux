# Agents Guide

This project uses Claude Code with access to specialized agents for specific workflows. Reference this guide to determine which agent is best for your task.

## Available Agents

### Explore
**Use for:** Fast, targeted code search and file discovery  
**When to reach for it:**
- Locating files by pattern (e.g., "find all `.tsx` files in src/components")
- Grepping for specific symbols/keywords across the codebase
- Answering "where is X defined?" or "which files reference Y?"
- Quick reads of file excerpts

**Not for:** Code review, design doc analysis, cross-file consistency checks, or open-ended analysis

### Plan
**Use for:** Designing implementation strategies before writing code  
**When to reach for it:**
- You're uncertain about the approach and want to explore options first
- A task touches multiple files or has architectural implications
- You want to clarify requirements before implementation
- The task can be solved multiple different ways

**Example**: "I want to add a new section to the hero. Should I create a new component or modify existing layout?"

### General-Purpose Agent
**Use for:** Complex multi-step tasks, research, code changes  
**When to reach for it:**
- Refactoring or optimizing performance
- Debugging issues that require deep investigation
- Tasks requiring coordination across multiple files
- Research that spans web search and local code

## Recommended Workflows

### Adding a New Component Section
1. Use **Explore** to check existing section patterns (`src/components/site/*.tsx`)
2. Use **Plan** to design the new section's structure and integration
3. Implement directly (or use general-purpose agent for complex logic)

### Fixing a Bug
1. Use **Explore** to locate the buggy code
2. Read the relevant files directly
3. Implement the fix
4. If multiple files affected or uncertain of root cause, escalate to general-purpose agent

### Refactoring Styles/Layout
1. Use **Explore** to find all files using the target classes/colors
2. Design the refactor with **Plan**
3. Implement with focused edits

### Performance Optimization
1. Use general-purpose agent to profile and identify bottlenecks
2. Implement fixes
3. Verify with measurement

## Notes

- **Plan mode** is free to use and often prevents wasted effort. Use it for non-trivial changes.
- **Explore agent** is fast and targeted; prefer it over general-purpose for "find X" queries.
- For quick, obvious fixes (typos, small tweaks), skip agents and edit directly.
- If you hit uncertainty mid-implementation, you can pause and spin up **Plan** to recalibrate.

