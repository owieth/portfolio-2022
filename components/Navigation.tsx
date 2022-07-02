import { Link, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import styled from 'styled-components';
import { MoonIcon } from '../components/icons/MoonIcon';
import { SunIcon } from '../components/icons/SunIcon';
import confetti from 'canvas-confetti';

const StyledNavigation = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 50px;
    cursor: pointer;
`;

const Button = ({ className, label }: { className: string, label: string }) => {
  const { type } = useTheme();

  return (
    <div className={className}>
      <div className="corners">
        <div className="top right"></div>
        <div className="bottom left"></div>
        <Link href={""} style={{ color: type == 'dark' ? 'white' : 'black' }}>{label}</Link>
      </div>
    </div>
  )
}

const StyledButton = styled(Button)`
  font-size: 24px;

  &:hover, &:active {
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
  }

  .corners {
    position: relative;
    padding: 10px;
  }

  .top, .bottom {
    position: absolute;
    width: 10px;
    height: 10px;
    pointer-events: none;
  }
`;

export const Navigation = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleChange = (e: any) => {
    setTheme(e.target.checked ? 'dark' : 'light')
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }

  return (
    <StyledNavigation>
      <StyledButton label='Home' className="" />
      <StyledButton label='Work' className="" />
      <StyledButton label='Portfolio' className="" />

      <Switch
        checked={isDark}
        size="xl"
        shadow
        color="warning"
        onChange={(e) => handleChange(e)}
        iconOn={<SunIcon />}
        iconOff={<MoonIcon />}
      />
    </StyledNavigation>
  )
}