<script>
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'sveltestrap';

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<Navbar color="light" light>
  <NavbarBrand href="/" class="me-auto">EducationML</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="about/">about</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="run/">run</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>