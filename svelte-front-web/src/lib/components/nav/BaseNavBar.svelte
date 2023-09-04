<script>
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "sveltestrap";

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<div class="navBar">
  <Navbar color="light" light>
    <NavbarBrand href="/" class="me-auto">EducationML</NavbarBrand>
    <NavbarToggler on:click={toggle} class="me-2" />
    <Collapse {isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="/about/" on:click={toggle}>about</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/run/" on:click={toggle}>run</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
<div class="navBarPadding"/>

<style>
  .navBar {
    /* tw-h-12 */
    height: 3rem;

    /* md:tw-h-14 */
    @media (min-width: 768px) {
      height: 3.5rem;
    }

    /* tw-z-50 */
    z-index: 50;

    /* tw-w-full */
    width: 100%;

    /* tw-fixed */
    position: fixed;

    /* tw-top-0 */
    top: 0;

    /* tw-bg-white */
    background-color: white;
    opacity: 0.75;
  }

  .navBarPadding {
    /* tw-h-12 */
    height: 4rem;

    /* md:tw-h-14 */
    @media (min-width: 768px) {
      height: 4rem;
    }
  }
</style>
