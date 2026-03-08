# ระบบฟอร์มข้อมูลคนไข้แบบ Real-time

โปรเจกต์นี้เป็นระบบฟอร์มบันทึกข้อมูลคนไข้ที่ทำงานแบบ real-time โดยใช้ Next.js, React Hook Form และ Socket.IO สำหรับการสื่อสารแบบ real-time ระหว่างผู้ใช้งาน

## 🚀 คุณสมบัติหลัก

- **Real-time Synchronization** - ข้อมูลคนไข้จะถูกอัปเดตแบบ real-time ระหว่างหน้า Patient Form และ Staff Dashboard
- **Patient Form** - ฟอร์มกรอกข้อมูลคนไข้ครบถ้วนพร้อม validation
- **Staff Dashboard** - หน้าจอสำหรับเจ้าหน้าที่ดูข้อมูลคนไข้แบบ live
- **Responsive Design** - รองรับการใช้งานบนอุปกรณ์ทุกขนาดด้วย Tailwind CSS
- **TypeScript** - พัฒนาด้วย TypeScript เพื่อความปลอดภัยและ maintainability

## 🛠️ เทคโนโลยีที่ใช้

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Real-time Communication**: Socket.IO
- **Validation**: Zod
- **Development**: ESLint

## 📦 การติดตั้งและรันโปรเจกต์

### 1. Clone โปรเจกต์
```bash
git clone https://github.com/Natthawut-jps/agnos-assignment.git
cd agnos-assignment
```

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. เริ่มต้น Socket.IO Server + Development Server
```bash
npm run dev
```

### 4. เปิดแอปพลิเคชัน
- เปิด [http://localhost:3000](http://localhost:3000) สำหรับหน้าหลัก
- เปิด [http://localhost:3000/patient](http://localhost:3000/patient) สำหรับฟอร์มคนไข้
- เปิด [http://localhost:3000/staff](http://localhost:3000/staff) สำหรับหน้าเจ้าหน้าที่

## 📋 การใช้งานระบบ

### สำหรับคนไข้ (Patient Form)
1. ไปที่หน้า `/patient`
2. กรอกข้อมูลส่วนตัวในฟอร์ม
3. ข้อมูลจะถูกส่งไปยังหน้า Staff Dashboard แบบ real-time

### สำหรับเจ้าหน้าที่ (Staff Dashboard)
1. ไปที่หน้า `/staff`
2. ดูข้อมูลคนไข้ที่กรอกแบบ live
3. ข้อมูลจะอัปเดตทันทีเมื่อคนไข้กรอกข้อมูลใหม่

## 🏗️ โครงสร้างโปรเจกต์

```
agnos-assignment/
├── app/                    # Next.js App Router
│   ├── patient/           # หน้าฟอร์มคนไข้
│   ├── staff/             # หน้าเจ้าหน้าที่
│   └── layout.tsx         # Root layout
├── components/            # React Components
│   ├── PatientForm.tsx    # ฟอร์มกรอกข้อมูลคนไข้
│   └── StaffDashboard.tsx # แดชบอร์ดเจ้าหน้าที่
├── server/               # Socket.IO Server
│   └── server.js         # Real-time server logic + Next.js App
├── hooks/                # Custom React Hooks
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🔧 คำสั่งที่มีให้ใช้

- `npm run dev` - เริ่มต้น development server
- `npm run build` - Build โปรเจกต์สำหรับ production
- `npm run start` - เริ่มต้น production server
- `npm run lint` - ตรวจสอบโค้ดด้วย ESLint

## 🌐 Port ที่ใช้

- **Next.js App**: Port 3000
- **Socket.IO Server**: Port 4000

## 📝 ข้อมูลที่รวบรวม

ฟอร์มคนไข้รวบรวมข้อมูลดังนี้:
- ชื่อจริง, ชื่อกลาง, นามสกุล
- วันเกิดและเพศ
- เบอร์โทรศัพท์และอีเมล
- ที่อยู่
- ภาษาที่ต้องการและสัญชาติ
- ชื่อผู้ติดต่อฉุกเฉิน
- ศาสนา

## 🤝 การมีส่วนร่วม

โปรเจกต์นี้เป็นส่วนหนึ่งของการทดสอบความสามารถในการพัฒนาระบบ real-time ด้วย Next.js และ Socket.IO
