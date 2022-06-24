import { Container, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import Link from "next/link";
import styled from 'styled-components';
import { MoonIcon } from '../components/icons/MoonIcon';
import { SunIcon } from '../components/icons/SunIcon';

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25%;
`;

const Button = ({ className, label }: { className: string, label: string }) => {
  return (
    <div className={className}>
    <div className="corners">
      <div className="top right"></div>
      <div className="bottom left"></div>
      { label }
      {/* <Link href={""} style={{ color: "white" }}>{label}</Link> */}
    </div>
    </div>
  )
}

const StyledButton = styled(Button)`
  .corners {
    position: relative;
    padding: 10px;
  }

  .top, .bottom {
    position: absolute;
    width: 20px;
    height: 20px;
    pointer-events: none;
  }

  .top {
    top: 0;
    border-top: 1px solid;
  }

  .bottom {
    bottom: 0;
    border-bottom: 1px solid;
  }

  .left {
    left: 0;
    border-left: 1px solid;
  }

  .right {
    right: 0;
    border-right: 1px solid;
  }
`;

export const Navigation = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <StyledNavigation>
      <StyledButton label='Home' className="" />
      <StyledButton label='Work' className="" />
      <StyledButton label='Portfolio' className="" />

      <Switch
        checked={isDark}
        size="xl"
        shadow
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<SunIcon />}
        iconOff={<MoonIcon />}
      />
    </StyledNavigation>
  )
}