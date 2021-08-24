export default function IndexPage() {
  return (
    <>
      <style>{`
        .variation-a {
          display: block;
        }
        .variation-b {
          display: none;
        }
      `}</style>
      <div className="variation-a">Variation A (default)</div>
      <div className="variation-b">Variation B</div>

      {/* JUST FOR THIS DEMO: */}
      <style>{`
        .variation-a {
          height: 100px;
          background-color: red;
          color: white;
        }

        .variation-b {
          height: 100px;
          background-color: blue;
          color: white;
        }
      `}</style>
      <hr />
      <button
        onClick={() => {
          document.cookie = `VARIATION=a; Max-Age=86400`;
        }}
      >
        Set Variation cookie A
      </button>
      <button
        onClick={() => {
          document.cookie = `VARIATION=b; Max-Age=86400`;
        }}
      >
        Set Variation cookie B
      </button>
    </>
  );
}
