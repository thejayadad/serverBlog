import Link from 'next/link';

const StyledNavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <span 
className="nav-link hover:text-litePurple transform transition-transform duration-300"      >{children}</span>
    </Link>
  );
};

export default StyledNavLink;
