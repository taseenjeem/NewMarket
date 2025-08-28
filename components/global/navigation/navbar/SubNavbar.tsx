import Container from "../../container/Container";
import CategorySheet from "./CategorySheet";

export default function SubNavbar() {
  return (
    <nav className="bg-secondary-foreground dark:bg-primary-foreground mt-[78px]">
      <Container size="full">
        <div className="text-primary-foreground dark:text-primary w-full">
          <CategorySheet />
        </div>
      </Container>
    </nav>
  );
}
