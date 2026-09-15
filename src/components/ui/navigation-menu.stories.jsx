import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './navigation-menu';

export default {
  title: 'UI/NavigationMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ display: 'grid', gap: 4, width: 220, padding: 4 }}>
            <NavigationMenuLink href="#">Button</NavigationMenuLink>
            <NavigationMenuLink href="#">Card</NavigationMenuLink>
            <NavigationMenuLink href="#">Dialog</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Documentación</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
