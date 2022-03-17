import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import AddButton from './AddButton';
import SearchInput from './SearchInput';

export default function NavigationBar() {
  return (
    <>
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Test application</NavbarHeading>
          <NavbarDivider />
          <SearchInput />
          <NavbarDivider />
          <AddButton />
        </NavbarGroup>
      </Navbar>
    </>
  );
}
