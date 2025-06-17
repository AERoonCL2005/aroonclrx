export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>ÆRoonCL R‑X1</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        ระบบ AI ที่ให้คำปรึกษาแบบจริงจัง ใช้งานได้จริง เหมือน GPT จริง
      </p>

      <button
        onClick={() => alert("ระบบกำลังมาเร็ว ๆ นี้")}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#111",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        🚀 เริ่มใช้งาน
      </button>

      <div style={{ marginTop: "2rem" }}>
        <h2>🔧 คุณสมบัติหลัก</h2>
        <ul>
          <li>💬 สนทนา AI ที่เข้าใจจริง</li>
          <li>🔊 รองรับเสียงพูด / แปลภาษา</li>
          <li>🔐 มีระบบผู้ใช้งาน + โปรไฟล์</li>
        </ul>
      </div>
    </main>
  );
          }
