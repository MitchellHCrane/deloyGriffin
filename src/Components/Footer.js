import "../css/footer.css";
import "../css/App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:8014406311">(801)-815-1881</a>
          </p>
          {/* <p className="footerP">E-fax: (801)-951-5213</p> */}
          <p className="footerP">
            Email:{" "}
            <a href="mailto:deloy@firstclasshomemortgage.com">
              Deloy@firstclasshomemortgage.com
            </a>
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">DeLoy Griffin (NMLS #250974)</p>
          <p className="footerP">
            Regulated by the Colorado Division of Real Estate NMLS #1843
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              1206 W S. Jordan Pkwy,{<br />} South Jordan, UT 84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
