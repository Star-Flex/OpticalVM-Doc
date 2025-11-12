# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro + Starlight documentation site for OpticalVM. Starlight is a documentation framework built on top of Astro that provides a full-featured documentation site out of the box.

## Development Commands

Run from the root of the project:

- `bun install` - Install dependencies
- `bun dev` - Start local dev server at `localhost:4321` (runs with `--host` flag to expose on network)
- `bun build` - Build production site to `./dist/`
- `bun preview` - Preview the build locally before deploying
- `bun astro ...` - Run Astro CLI commands (e.g., `bun astro add`, `bun astro check`)

## Architecture

### Content Management

- **Documentation files**: `.md` or `.mdx` files in `src/content/docs/`
- **Routing**: Each file is automatically exposed as a route based on its filename
- **Content schema**: Defined in `src/content.config.ts` using Starlight's `docsLoader()` and `docsSchema()`
- **Images**: Place in `src/assets/` and reference with relative links in Markdown
- **Static assets**: Place in `public/` directory (favicons, etc.)

### Configuration

- **Astro config**: `astro.config.mjs` - Main configuration file
- **Site title**: "Opticalvm Docs"
- **Default locale**: `zh-Hans` (Simplified Chinese)
- **Sidebar**: Currently commented out in config, using auto-generated navigation
- **Social links**: GitHub link configured in Starlight integration

### Project Structure

```
src/
├── assets/          # Images and media files
├── content/
│   ├── docs/        # Documentation markdown/mdx files
│   └── content.config.ts  # Content collection schema
```

## Key Notes

- This project uses Bun as the package manager
- The site is configured for Simplified Chinese as the default locale
- Starlight handles routing, navigation, and documentation features automatically
- The sidebar configuration is commented out, so Starlight is using default auto-generation based on file structure

### 提交代码

如果我有要求明确你帮我提交代码的话，你需要遵循以下规范：

- 你只能使用以下几个标签 `功能` `修复` `优化` `重构`
- 你需要参考我之前的提交风格
- 你需要一起提交当前所有修改过的代码，特别注意是所有的。
- 一般来说你都是先提交到本地仓库，我会自动手动提交到远程仓库
