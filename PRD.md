# Planning Guide

ระบบค้นหาและแสดงรายชื่อนักเรียนโรงเรียนอ่างทองปัทมโรจน์วิทยาคม — แพลตฟอร์มสำหรับดูข้อมูลนักเรียนแบบเรียบง่ายและสวยงาม

**Experience Qualities**: 
1. **Clean** — อินเทอร์เฟซที่โล่งสบายตา ไม่รกรุงรัง เน้นเนื้อหาหลัก
2. **Fluid** — การนำทางและการโต้ตอบที่ราบรื่น ใช้งานง่าย
3. **Professional** — ดูน่าเชื่อถือและเป็นมืออาชีพ เหมาะกับสถาบันการศึกษา

**Complexity Level**: Light Application (multiple features with basic state) — เป็นแอปค้นหาและแสดงข้อมูลนักเรียนที่มีการกรองตามห้องเรียนและค้นหา พร้อม modal สำหรับแสดงรายละเอียด

## Essential Features

### 1. Classroom Filtering
- **Functionality**: เลือกดูนักเรียนตามห้องเรียน (ม.4/5, ม.4/6, ม.4/7, ม.5/5, ม.5/6, ม.5/7)
- **Purpose**: ให้ผู้ใช้สามารถกรองข้อมูลนักเรียนตามห้องที่ต้องการได้ง่าย
- **Trigger**: คลิกที่ tab ห้องเรียน
- **Progression**: เลือกห้อง → ระบบกรองข้อมูล → แสดงนักเรียนในห้องนั้น
- **Success criteria**: การสลับห้องเรียนทำงานได้ทันที ข้อมูลถูกต้อง แสดงจำนวนนักเรียนที่พบ

### 2. Search System
- **Functionality**: ค้นหานักเรียนจากชื่อ ชื่อเล่น เลขประจำตัว อีเมล หรือเบอร์โทร
- **Purpose**: ให้ผู้ใช้สามารถหานักเรียนที่ต้องการได้รวดเร็ว
- **Trigger**: พิมพ์ในช่องค้นหา
- **Progression**: พิมพ์คำค้นหา → real-time filtering → แสดงผลลัพธ์ที่ตรงกัน
- **Success criteria**: ค้นหาทำงานแบบ real-time ไม่มี lag รองรับภาษาไทยและอังกฤษ

### 3. Student Grid Display
- **Functionality**: แสดงการ์ดนักเรียนในรูปแบบ grid พร้อมรูปภาพ ชื่อ และข้อมูลพื้นฐาน
- **Purpose**: แสดงข้อมูลนักเรียนหลายคนพร้อมกันในรูปแบบที่เข้าใจง่าย
- **Trigger**: เลือกห้องเรียนหรือค้นหา
- **Progression**: โหลดข้อมูล → แสดง grid responsive → stagger animation
- **Success criteria**: การ์ดแสดงข้อมูลครบถ้วน responsive ทุก breakpoint มี hover effects ที่ลื่นไหล

### 4. Student Detail Modal
- **Functionality**: แสดงข้อมูลนักเรียนแบบละเอียดใน modal
- **Purpose**: ให้ผู้ใช้เห็นข้อมูลเต็มรูปแบบโดยไม่ต้องออกจากหน้า
- **Trigger**: คลิกที่การ์ดนักเรียน
- **Progression**: คลิกการ์ด → modal เปิดพร้อม animation → แสดงข้อมูลครบถ้วน → ปิด modal
- **Success criteria**: modal เปิด/ปิดได้ราบรื่น แสดงข้อมูลครบ รองรับการปิดด้วย ESC และคลิกนอก modal

## Edge Case Handling

- **No Search Results** — แสดงข้อความ empty state ที่เป็นมิตร พร้อมแนะนำให้ลองคำค้นหาอื่น
- **Missing Student Data** — แสดง fallback avatar และข้อความ "ไม่ระบุ" สำหรับข้อมูลที่ขาดหาย
- **Image Loading Failure** — ใช้ avatar placeholder พร้อมไอคอน user
- **Long Names** — ใช้ line-clamp เพื่อไม่ให้ชื่อยาวทำลาย layout
- **Mobile Navigation** — รองรับ safe area สำหรับ iOS และ bottom nav ที่เข้าถึงง่าย

## Design Direction

ดีไซน์ควรให้ความรู้สึก **สะอาด โปร่งใส ทันสมัย** แบบ Liquid Glass UI — ใช้กระจกฝ้า (frosted glass) ที่โปร่งแสง ลอยอยู่บนพื้นหลังที่นุ่มนวล เน้นความเรียบง่ายแต่มีรายละเอียดที่ประณีต เหมาะกับผู้ใช้ที่เป็นนักเรียนและครู ต้องดูเป็นมืออาชีพและน่าเชื่อถือ

## Color Selection

**Liquid Glass UI with Soft Green-White Holographic Background**

- **Primary Color**: `oklch(0.65 0.20 160)` — เขียวสดใสแบบ teal ที่ดูสดใสและเป็นมิตร สื่อถึงความสดชื่นและเทคโนโลยี
- **Secondary Colors**: 
  - `oklch(0.92 0.08 200)` — เขียวฟ้าอ่อนมากสำหรับพื้นรอง
  - `oklch(0.75 0.15 280)` — indigo/blue สำหรับ accent
- **Accent Color**: `oklch(0.75 0.15 280)` — น้ำเงินม่วงสำหรับเน้นหัวข้อและ gradient
- **Foreground/Background Pairings**:
  - Background `oklch(0.98 0.01 180)` (ขาวอมเขียวจางมาก): Foreground `oklch(0.15 0.02 240)` (เขียวอมดำ) - Ratio 12.4:1 ✓
  - Primary `oklch(0.65 0.20 160)`: White text `oklch(0.98 0.01 180)` - Ratio 4.9:1 ✓
  - Accent `oklch(0.75 0.15 280)`: Foreground `oklch(0.15 0.02 240)` - Ratio 7.2:1 ✓

## Font Selection

ใช้ **Inter** เป็นหลัก — เป็น modern sans-serif ที่อ่านง่าย มีความชัดเจน และรองรับภาษาไทยได้ดี สื่อถึงความทันสมัยและเป็นมืออาชีพ

- **Typographic Hierarchy**:
  - H1 (Hero Title): Inter Bold / 36-56px / -0.02em letter-spacing / line-height 1.1
  - H2 (Section Title): Inter SemiBold / 24-32px / -0.01em / line-height 1.2
  - H3 (Card Title): Inter SemiBold / 18-20px / normal / line-height 1.3
  - Body Text: Inter Regular / 14-16px / normal / line-height 1.6
  - Caption: Inter Regular / 12-14px / normal / line-height 1.4 / text-muted-foreground
  - Badge/Label: Inter Medium / 11-13px / 0.01em / uppercase

## Animations

**Subtle และ purposeful** — ใช้ animation เพื่อเพิ่มความรู้สึกว่าอินเทอร์เฟซมีชีวิต แต่ไม่รบกวนการใช้งาน:
- Stagger fade-in สำหรับการ์ดนักเรียนเมื่อโหลดครั้งแรก (delay 50ms ต่อการ์ด)
- Scale + shadow transition เมื่อ hover การ์ด (scale 1.02, duration 300ms)
- Smooth modal open/close animation ด้วย framer-motion (fade + scale)
- Backdrop blur fade เมื่อเปิด modal
- Glass card ลอยขึ้นเล็กน้อยเมื่อ hover

## Component Selection

- **Components**:
  - `Tabs` — สำหรับสลับห้องเรียน แบบ pill style พร้อม glass background
  - `Input` — ช่องค้นหาพร้อมไอคอน MagnifyingGlass ด้านซ้าย
  - `Card` — การ์ดนักเรียน custom glass style
  - `Dialog` — modal สำหรับแสดงรายละเอียดนักเรียน
  - `Avatar` — แสดงรูปนักเรียนพร้อม fallback
  - `Badge` — แสดงเลขประจำตัวและห้องเรียน
  - `Separator` — แบ่งส่วนใน modal

- **Customizations**:
  - Custom `GlassCard` component — card พร้อม backdrop-blur, subtle border, และ shadow
  - Custom particle background — canvas particles ที่เคลื่อนไหวนุ่มนวล
  - Custom hero gradient background — holographic white-green gradient

- **States**:
  - Cards: default → hover (scale + shadow) → active (click feedback)
  - Tabs: inactive (muted) → hover (secondary bg) → active (primary bg)
  - Input: default → focus (ring primary)
  - Modal: closed → opening (fade + scale in) → open → closing (fade + scale out)

- **Icon Selection**:
  - `GraduationCap` (duotone) — hero header
  - `MagnifyingGlass` — search input และ empty state
  - `User` (duotone) — avatar fallback
  - `Envelope`, `Phone`, `IdentificationCard` (duotone) — ข้อมูลนักเรียนใน modal

- **Spacing**:
  - Container: `max-w-7xl mx-auto px-6 md:px-12 lg:px-24`
  - Section gaps: `gap-6 md:gap-8`
  - Grid gaps: `gap-4 md:gap-6`
  - Card padding: `p-4 md:p-6`

- **Mobile**:
  - Grid: 1 column (< sm) → 2 columns (sm-md) → 3 columns (md-lg) → 4 columns (lg+)
  - Search bar: full width มี larger touch targets (h-12)
  - Tabs: scroll horizontal บนมือถือหากจำเป็น
  - Modal: full screen บนมือถือเล็ก responsive padding
