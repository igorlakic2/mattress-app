import "./footer.css";

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">Beo Komfort</h3>
          <p className="footer-text">
            Prodaja dušeka — kvalitetan san i podrška za ceo dan.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Kontakt</h4>
          <ul className="footer-list">
            <li>
              <strong>Mejl:</strong>{" "}
              <a href="mailto:beokomfort@gmail.com" className="footer-link">
                beokomfort@gmail.com
              </a>
            </li>
            <li>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+381613188421" className="footer-link">
                0613188421
              </a>
            </li>
            <li>
              <strong>Adresa:</strong> Beograd
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-subtitle">Podaci o kompaniji</h4>
          <div className="footer-company">
            <div>
              <strong>PIB:</strong> 112910155
            </div>
            <div>
              <strong>MB:</strong> 21766208
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Beo Komfort. Sva prava zadržana.
      </div>
    </footer>
  );
};

export default AppFooter;
