# Planning Guide

A modern, minimal student roster management system for Angthong Pattamarot Wittayakom School, enabling easy browsing and searching of student information across multiple classes.

**Experience Qualities**:
1. **Clean** - Uncluttered interface with generous white space that prioritizes readability and visual hierarchy
2. **Efficient** - Quick access to student information through intuitive filtering and search functionality
3. **Professional** - Polished, academic aesthetic that reflects the institutional context while feeling contemporary

**Complexity Level**: Light Application (multiple features with basic state)
This is a data browsing application with filtering, search, and detail views - requiring state management for filters and student selection but no complex workflows or data mutations.

## Essential Features

### Class Filter Tabs
- **Functionality**: Switch between different classroom rosters (ม.4/6, ม.4/7, ม.5/6, ม.5/7)
- **Purpose**: Organize students by their assigned classrooms for easy navigation
- **Trigger**: User clicks on a class tab
- **Progression**: User lands on page with default class selected → clicks different class tab → student list updates to show selected class → student count updates
- **Success criteria**: List displays only students from selected class, active tab is visually distinct, smooth transition between classes

### Student Search
- **Functionality**: Real-time search filtering by name, nickname, student ID, or contact information
- **Purpose**: Enable quick lookup of specific students without manual scrolling
- **Trigger**: User types in search input field
- **Progression**: User focuses search field → types query → list filters in real-time → results update with each keystroke → empty state shows when no matches
- **Success criteria**: Search matches across all text fields, results appear instantly, search works within selected class filter

### Student List Display
- **Functionality**: Scrollable grid/list of student cards showing key information
- **Purpose**: Present student roster in an organized, scannable format
- **Trigger**: Automatic on page load and filter changes
- **Progression**: Page loads → default class roster displays → cards show student photos, names, nicknames → user scrolls to browse → clicks card for details
- **Success criteria**: All students render with complete information, photos load properly, layout is responsive, student number badges are visible

### Student Detail View
- **Functionality**: Expandable modal or detail panel showing full student information
- **Purpose**: Provide complete student details without cluttering the main list view
- **Trigger**: User clicks on a student card
- **Progression**: User clicks student card → detail view opens → displays full information (name, nickname, email, phone, student ID, photo) → user reviews → closes detail view
- **Success criteria**: All fields display correctly, missing data shows placeholder, modal is easy to dismiss, photo displays at larger size

## Edge Case Handling

- **Missing Data** - Display placeholder text (e.g., "ไม่ระบุ" or "-") for empty fields rather than leaving blank
- **Image Loading Failures** - Show default avatar icon when student photo fails to load
- **No Search Results** - Display friendly empty state message suggesting to try different search terms
- **Empty Class Roster** - Show message if a class has no students (though unlikely with current data)
- **Long Names or Text** - Truncate with ellipsis and show full text on hover or in detail view
- **Mobile Responsiveness** - Adapt grid to single column on small screens, ensure touch targets are adequate

## Design Direction

The design should evoke academic professionalism with a youthful, approachable energy. It should feel like a modern digital yearbook - clean, organized, and pleasant to browse. The interface should be calming and focused, avoiding unnecessary visual noise while maintaining enough personality to feel engaging rather than sterile.

## Color Selection

A soft, warm academic palette with subtle Thai cultural influences through warm earth tones and sophisticated neutrals.

- **Primary Color**: Deep Teak Brown `oklch(0.35 0.06 55)` - Communicates stability, tradition, and academic authority with warmth
- **Secondary Colors**: 
  - Soft Sage `oklch(0.88 0.02 145)` - Supporting background color for subtle differentiation
  - Warm Beige `oklch(0.95 0.01 85)` - Card backgrounds and secondary surfaces
- **Accent Color**: Terracotta Orange `oklch(0.65 0.15 45)` - Attention-grabbing for active states, buttons, and important elements
- **Foreground/Background Pairings**:
  - Primary on Background (White): `oklch(0.35 0.06 55)` on `oklch(1 0 0)` - Ratio 8.2:1 ✓
  - Accent on Background: `oklch(0.65 0.15 45)` on `oklch(1 0 0)` - Ratio 4.9:1 ✓
  - Foreground on Warm Beige: `oklch(0.25 0.02 55)` on `oklch(0.95 0.01 85)` - Ratio 11.5:1 ✓

## Font Selection

Typography should balance readability with personality - professional enough for institutional use but contemporary enough to feel modern and engaging.

- **Primary Font**: Noto Sans Thai (for Thai text) + Inter (for English/numbers) - Clean, highly legible, excellent Thai script support
- **Typographic Hierarchy**:
  - H1 (App Title): Noto Sans Thai Semi-Bold / 32px / tight tracking / primary color
  - H2 (Section Headers): Noto Sans Thai Medium / 20px / normal tracking
  - Body (Student Names): Noto Sans Thai Regular / 16px / relaxed line-height (1.6)
  - Small (Labels/Meta): Inter Medium / 13px / wide tracking (0.02em) / uppercase / muted color
  - Numbers (Student ID): Inter Mono Regular / 14px / tabular numbers

## Animations

Animations should feel lightweight and purposeful - subtle enough to not slow down browsing but present enough to provide satisfying feedback and spatial orientation.

- **Card Hover**: Subtle lift (2px translate-y) with soft shadow expansion (150ms ease-out)
- **Filter Transitions**: Smooth fade + slight slide-up (300ms) when switching classes
- **Modal Entry**: Scale from 0.95 + fade in (250ms cubic-bezier) with backdrop fade
- **Search Filtering**: Staggered fade-in for results (50ms delay between items)
- **Loading States**: Gentle skeleton pulse for image loading placeholders

## Component Selection

- **Components**:
  - Tabs (Shadcn) - For class filtering with custom styling for pill-style appearance
  - Card (Shadcn) - Student cards with hover states and click interactions
  - Dialog (Shadcn) - Student detail modal view
  - Input (Shadcn) - Search field with icon
  - Avatar (Shadcn) - Student photos with fallback states
  - Badge (Shadcn) - Student number indicators on cards
  - Skeleton (Shadcn) - Loading states for images

- **Customizations**:
  - Custom student card component with photo, gradient overlay, and information layout
  - Thai-language empty state illustrations/messages
  - Custom grid layout with responsive columns (4 columns → 3 → 2 → 1)

- **States**:
  - Cards: default, hover (elevated), active (pressed), loading (skeleton)
  - Tabs: inactive (muted), active (accent background), hover (subtle highlight)
  - Search: empty, focused (ring), populated, no results
  - Images: loading (skeleton), loaded, error (fallback icon)

- **Icon Selection**:
  - MagnifyingGlass (search input)
  - User (avatar fallback)
  - Phone (contact information)
  - Envelope (email)
  - IdentificationCard (student ID)
  - X (close modal)

- **Spacing**:
  - Page padding: px-6 md:px-12 lg:px-24
  - Section gaps: gap-8 to gap-12
  - Card padding: p-6
  - Grid gap: gap-4 md:gap-6
  - Component spacing: space-y-4 for vertical stacks

- **Mobile**:
  - Grid: 4 columns desktop → 3 tablet → 2 small tablet → 1 mobile
  - Tabs: Scrollable horizontal on mobile with snap points
  - Search: Full-width on mobile with adequate touch target (44px min)
  - Modal: Full-screen on mobile with slide-up animation
  - Cards: Larger touch targets (minimum 48px) with increased padding
