import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget";
import { getDocs, collection, getFirestore } from "firebase/firestore";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState([]);

  const db = getFirestore();
  const categoryCollectionName = "categories";
  const categoryCollection = collection(db, categoryCollectionName);

  useEffect(() => {
    getDocs(categoryCollection).then((res) => {
      setCategories(res.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <Navbar id="myNavBar" className="sticky-top" expanded={expanded} bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <i class="bi bi-house-door-fill"></i> Loopa
        </Navbar.Brand>
        <Nav id="cart">
          <Nav.Link as={Link} to="/cart" onClick={() => setExpanded(false)}>
            <CartWidget />
          </Nav.Link>
        </Nav>
        <Navbar.Toggle id="prueba" aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setExpanded(false)}>
                <Link to="/">Ver todas</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {categories.map((category) => (
                <NavDropdown.Item onClick={() => setExpanded(false)}>
                  <Link to={`/category/${category.category}`}>{category.label}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/track" onClick={() => setExpanded(false)}>
              Status Orden
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
