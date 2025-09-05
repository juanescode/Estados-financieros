import './App.css'

function App() {

  const documents = [
    {
      id: 'er',
      title: 'Estado de Resultados',
      subtitle: 'Diciembre 2024',
      description: 'Reporte de ingresos, gastos y utilidades del período',
      file: '/ER UOLASER DIC 2024.pdf',
      icon: '📊'
    },
    {
      id: 'esfa',
      title: 'Estado de Situación Financiera',
      subtitle: 'Diciembre 2024',
      description: 'Balance general de activos, pasivos y patrimonio',
      file: '/ESFA UOLASER DIC 2024.pdf',
      icon: '📈'
    }
  ]

  const openDocument = (file: string) => {
    window.open(file, '_blank')
  }

  const downloadDocument = (file: string, filename: string) => {
    const link = document.createElement('a')
    link.href = file
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-decoration"></div>
        <div className="header-decoration"></div>
        <div className="container">
          <div className="header-content">
            <h1 className="main-title">
              Unidad Oftalmológica Láser S.A.
            </h1>
            <p className="subtitle">Estados Financieros</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="intro-section">
            <h2 className="section-title">Estados Financieros 2024</h2>
          </section>

          <section className="documents-grid">
            {documents.map((doc) => (
              <div key={doc.id} className="document-card">
                <div className="document-icon">
                  {doc.icon}
                </div>
                <div className="document-content">
                  <h3 className="document-title">{doc.title}</h3>
                  <p className="document-subtitle">{doc.subtitle}</p>
                  <p className="document-description">{doc.description}</p>
                </div>
                <div className="document-actions">
                  <button 
                    className="btn-primary"
                    onClick={() => openDocument(doc.file)}
                  >
                    Ver Documento
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={() => downloadDocument(doc.file, doc.file.substring(1))}
                  >
                    Descargar PDF
                  </button>
                </div>
              </div>
            ))}
          </section>

          
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="company-info">
              <h4>Unidad Oftalmológica Láser S.A.</h4>
              <p>Más de 29 años de experiencia en salud visual</p>
            </div>
            <div className="contact-info">
              <p>📞 +57 320 6803362</p>
              <p>📧 contacto@unidadoftalmologicalaser.com.co</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Unidad Oftalmológica Láser S.A.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
