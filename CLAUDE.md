# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TMF Fibers marketing website - Brazilian industrial filtration company focusing on sustainable solutions. The project has dual implementations:
- React TSX components (modular approach)
- Single HTML page with inline JavaScript (CDN-based)

## Development Commands

Since this is a static website project without a build system:
- **View HTML version**: Open any `.html` file in the `Mark/` directory directly in browser
- **TSX components**: Require integration into a React build system (Next.js, Vite, or CRA)
- **Completed pages**: `index.html`, `produtos.html`, `aplicacoes.html`, `sustentabilidade.html`, `sobre.html`

## Architecture & Key Patterns

### Component Structure
All components follow consistent patterns:
```tsx
interface ComponentProps {
  // Minimal prop interfaces, mostly empty
}

export default function ComponentName({}: ComponentProps) {
  // Functional components with hooks
  // Tailwind classes for styling
  // Lucide icons in TSX, Font Awesome in HTML
}
```

### Design System Constants
- **Primary**: #0B3C5D (dark blue)
- **Secondary**: #328CC1 (medium blue)  
- **Accent**: #1D5E2A (green)
- **Highlight**: #D9B310 (yellow)
- Font families: Montserrat (display), Open Sans (body), Roboto Mono (mono)

### Platform Considerations
The HTML version includes specific CSS overrides for GHL (Go High Level) platform compatibility:
- Removes default padding from `.c-row` elements
- Fixes dropdown menu interaction gaps
- Mobile-specific overrides
- Console warning suppression for Tailwind CDN
- SVG wave dividers require xmlns attribute and proper fill classes

### Page Structure

#### Homepage (`index.html`)
- **Header** → complex with search and multi-level dropdowns
- **Hero** → gradient overlay with background image
- **ValueProposition** → 4 value cards with icons
- **ProductCategories** → 5 product types with images
- **SustainableAdvantages** → bar charts (CSS-based in HTML)
- **IndustryApplications** → 7 industry sectors with challenges/solutions
- **MainCTA** → gradient background with dual CTAs
- **Footer** → multi-column with social links

#### Products Page (`produtos.html`)
- **ProductHero** → smaller hero with breadcrumb navigation
- **ProductFilters** → collapsible sidebar with checkbox filters
- **ProductGrid** → product cards with image carousel
- **ComparisonTable** → side-by-side product comparison
- **CatalogDownload** → form-gated PDF download section

#### Applications Page (`aplicacoes.html`)
- **ApplicationsHero** → standardized hero matching Products page style with SVG wave divider
- **IndustryDetail** → interactive industry selector with detailed solutions for 7 sectors
- **ApplicationsCTA** → consultation-focused call-to-action with service highlights
- Hash navigation support for direct industry linking (#alimentar, #quimico, etc.)

#### Sustainability Page (`sustentabilidade.html`)
- **SustainabilityHero** → green-themed hero with environmental imagery
- **EnvironmentalMetrics** → animated counters (CO₂, water, recyclability, renewable materials)
- **SustainabilityPillars** → 4 core pillars with expandable features
- **Certifications** → certifications grid with achievements timeline
- **SustainabilityCTA** → download reports, impact calculator, consultation booking

#### About Page (`sobre.html`)
- **AboutHero** → company story hero with team imagery
- **CompanyHistory** → 20+ year timeline with milestones and stats
- **ValuesAndMission** → mission/vision cards and 4 core values
- **TeamSection** → leadership profiles with contact info and team statistics
- **AboutCTA** → three-way CTA for clients, employees, and partners

### Filtering System (Products Page)
- All filters use checkboxes for consistency
- State managed in App component
- Filters include: categories, efficiency ranges, temperature ranges, applications
- Real-time filtering with product count updates
- "No results" state with clear filters option

### Component Dependencies
- Header/Footer are reused across all pages
- Product data structure includes filter-friendly IDs
- Application names mapped from IDs to Portuguese labels

### Brazilian Market Context
- All content in Brazilian Portuguese
- Industry sectors specific to Brazilian market
- Emphasis on national raw materials and local sustainability
- B2B industrial focus

## Site Plan

### Completed Pages
1. **Homepage** (`index.html`) - Company overview and main value propositions
2. **Products** (`produtos.html`) - Full product catalog with advanced filtering
3. **Applications** (`aplicacoes.html`) - Industry-specific solutions with detailed use cases
4. **Sustainability** (`sustentabilidade.html`) - Environmental impact metrics and certifications
5. **About** (`sobre.html`) - Company history, values, mission, and team
6. **Contact** (`contato.html`) - Comprehensive contact forms, support channels, and locations
7. **Privacy Policy** (`privacidade.html`) - LGPD-compliant data protection policy
8. **Terms of Use** (`termos.html`) - Legal terms and B2B commercial conditions
9. **Certifications** (`certificacoes.html`) - Quality standards and industry credentials

### Footer Pages Completed
All regulatory and legal pages referenced in the Footer are now complete!

### Development Workflow
1. Create TSX components for each page section
2. Test components individually
3. Port to single-file HTML format with inline JavaScript
4. Apply GHL platform-specific CSS overrides
5. Test in target hosting environment

## Implementation Notes

When modifying components:
1. Maintain consistency between TSX and HTML implementations
2. Preserve responsive breakpoints (mobile-first approach)
3. Keep GHL platform overrides intact in HTML version
4. Use existing color palette and typography system
5. Industry icons and technical specifications are key differentiators
6. Always test SVG dividers in GHL environment
7. Ensure all images use CDN URLs, not local paths

### Recent Standardizations
- **Footer**: All pages now use the enhanced Footer from aplicacoes.html with newsletter signup and better organization
- **Inner Page Heroes**: Products, Applications, Sustainability, and About pages share consistent hero styling (height, breadcrumbs, SVG wave)
- **Font Awesome Icons**: Always use `fas fa-{icon}` format (not just `fa-{icon}`) for proper rendering
- **Main Hero**: Homepage maintains unique large hero for primary landing experience
- **Component Pattern**: All TSX components use minimal prop interfaces and functional components with hooks
- **Color Usage**: Consistent use of design system colors across all components
- **Animation**: Counter animations using Intersection Observer, hover effects on cards

## Project Status Summary

As of the last update:
- **9 of 9 pages completed** (100% complete - COMPLETE WEBSITE FINISHED!)
- **40+ TSX components created** across all pages
- **All pages fully responsive** with mobile-first design
- **Consistent design system** implemented throughout
- **GHL platform compatibility** maintained
- **Complete TMF Fibers website** ready for production deployment
- **Inner Page Heroes**: Pages share consistent hero styling (height, breadcrumbs, SVG wave)
- **Legal compliance**: LGPD Privacy Policy, Terms of Use, and Certifications pages complete

### Contact Page Components Added:
- **ContactHero**: Consistent hero with breadcrumbs and contact highlights
- **ContactForm**: Comprehensive B2B form with industry/product selectors
- **ContactInfo**: Multiple contact channels with response times
- **SupportChannels**: 6 specialized departments with direct contact info  
- **Locations**: 4 office locations with national coverage details

### Footer Pages Components Added:
- **PrivacyPolicyContent**: LGPD-compliant data protection policy with user rights
- **TermsOfUseContent**: Legal terms for B2B commercial relationships
- **CertificationsContent**: ISO certifications, quality metrics, and industry standards
- **Consistent Heroes**: All footer pages follow the same inner page hero pattern

## Recent Updates (December 2024)

### Team Section Updates
- **Real Team Members**: Replaced placeholder team with actual directors:
  - **Thiago Prol** - Diretor Comercial
  - **Marcelo Lima** - Diretor de Produção  
  - **Matheus Prol** - Diretor de Marketing
- **Actual Photos**: Integrated real headshots from company CDN
- **Updated Bios**: Role-specific descriptions for each director

### Footer Cleanup
- **Services Section Removed**: Eliminated dead "Serviços" links across all pages
- **Streamlined Structure**: Footer now focuses on essential sections only
- **Consistent Across Pages**: Applied changes to all 9 HTML files uniformly
- **TSX Components**: Verified TSX Footer was already clean (different structure)

### Logo Implementation
- **SVG Logo Created**: Custom "TMFibers" logo in brand green colors
- **Typography**: "TMF" bold (700), "ibers" regular (400) using Montserrat
- **Color System**: 
  - Headers: `#1D5E2A` (brand green)
  - Footers: `#4c9f5f` (lighter for dark backgrounds)
- **Full Deployment**: Updated across all 9 HTML files + 2 TSX components
- **Scalable Design**: Professional SVG implementation replaces circular placeholders

### Technical Improvements
- **Brand Consistency**: Unified logo treatment across entire website
- **Clean Codebase**: Removed unused/placeholder content
- **Real Content**: Actual team data instead of mock information
- **Professional Appearance**: Website now reflects real company structure

### Git & Version Control Setup
- **Repository Initialized**: Full Git version control implemented
- **GitHub Integration**: Live repository at https://github.com/mhprol/tmf-web-project
- **GitHub CLI**: Installed and authenticated for streamlined workflow
- **Professional .gitignore**: Comprehensive exclusions for OS, IDE, and build files
- **Initial Commit**: Complete project state (58 files, 17,145 lines) committed
- **Remote Tracking**: HTTPS protocol configured for easy push/pull operations
- **Workflow Established**: Standard Git workflow documented for ongoing development

### Development Workflow (Git)
```bash
# Daily changes:
git add .                    # Stage all changes
git commit -m "Description"  # Commit with clear message
git push                     # Push to GitHub

# Check status:
git status                   # See current changes
git log --oneline           # View commit history

# Feature development:
git checkout -b feature-name # Create feature branch
git push -u origin feature-name # Push new branch
```