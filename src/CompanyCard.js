import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**Shows information for a single company
 *
 * Props:
 * -company: {handle, name, description, numEmployees, logoURL}
 *
 * State:
 * -None
 */
function CompanyCard({ company }) {
  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="CompanyCard">
        {company.logoUrl !== null && (
          <div>
            <img src={company.logoUrl} alt={`${company.handle} Logo`}></img>
            <p>{company.name}</p>
            <p>{company.description}</p>
          </div>
        )}
        {company.logoUrl === null && (
          <div>
            <p>{company.name}</p>
            <p>{company.description}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default CompanyCard;
