import React from 'react';
import * as Svg from 'react-native-svg';
import {useTheme} from 'styled-components/native';
import {
  Action,
  Black,
  NeutralSlate,
  Slate,
  SlateDark,
  White,
} from '../../../styles/colors';
import {BitPayTheme} from '../../../themes/bitpay';

const Add = () => {
  const theme = useTheme();

  return (
    <Svg.Svg width="43px" height="43px" fill="none">
      <Svg.Rect
        width="43"
        height="43"
        rx="12"
        fill={theme.dark ? '#383838' : NeutralSlate}
      />
      <Svg.Path
        fill={theme.dark ? White : SlateDark}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.1875 20.6875H22.3125V15.8125C22.3125 15.325 21.9875 15 21.5 15C21.0125 15 20.6875 15.325 20.6875 15.8125V20.6875H15.8125C15.325 20.6875 15 21.0125 15 21.5C15 21.9875 15.325 22.3125 15.8125 22.3125H20.6875V27.1875C20.6875 27.675 21.0125 28 21.5 28C21.9875 28 22.3125 27.675 22.3125 27.1875V22.3125H27.1875C27.675 22.3125 28 21.9875 28 21.5C28 21.0125 27.675 20.6875 27.1875 20.6875Z"
      />
    </Svg.Svg>
  );
};

const Backup = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="13" height="16" viewBox="0 0 13 16" fill="none">
      <Svg.Path
        fill={theme.colors.link}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.34264H12.125C12.4702 6.34264 12.75 6.62246 12.75 6.96764V14.4676C12.75 14.8128 12.4702 15.0926 12.125 15.0926H0.875C0.529822 15.0926 0.25 14.8128 0.25 14.4676V6.96764C0.25 6.62246 0.529822 6.34264 0.875 6.34264H2.75V3.78014C2.75658 2.79223 3.15665 1.8477 3.86164 1.15561C4.56663 0.463524 5.51839 0.0809717 6.50625 0.0926358H6.5625C8.61734 0.11325 10.2673 1.79401 10.25 3.84889L9 3.83639C9.01215 2.4736 7.919 1.35809 6.55625 1.34264H6.47437C5.11941 1.34186 4.01609 2.43151 4 3.78639V6.34264ZM5.25 10.7176C5.25 11.408 5.80964 11.9676 6.5 11.9676C7.19036 11.9676 7.75 11.408 7.75 10.7176C7.75 10.0273 7.19036 9.46763 6.5 9.46763C5.80964 9.46763 5.25 10.0273 5.25 10.7176Z"
      />
    </Svg.Svg>
  );
};

const Encrypt = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Svg.Path
        fill={theme.dark ? White : Action}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4.53235C9.03553 4.53235 9.875 3.69288 9.875 2.65735C9.875 1.62181 9.03553 0.782349 8 0.782349C6.96447 0.782349 6.125 1.62181 6.125 2.65735C6.125 3.69288 6.96447 4.53235 8 4.53235ZM4.25 13.9073C4.25 14.9429 3.41053 15.7823 2.375 15.7823C1.33947 15.7823 0.5 14.9429 0.5 13.9073C0.5 12.8718 1.33947 12.0323 2.375 12.0323C3.41053 12.0323 4.25 12.8718 4.25 13.9073ZM15.5 13.9073C15.5 14.9429 14.6605 15.7823 13.625 15.7823C12.5895 15.7823 11.75 14.9429 11.75 13.9073C11.75 12.8718 12.5895 12.0323 13.625 12.0323C14.6605 12.0323 15.5 12.8718 15.5 13.9073ZM4.25 2.65735C4.25 3.69288 3.41053 4.53235 2.375 4.53235C1.33947 4.53235 0.5 3.69288 0.5 2.65735C0.5 1.62181 1.33947 0.782349 2.375 0.782349C3.41053 0.782349 4.25 1.62181 4.25 2.65735ZM13.625 4.53235C14.6605 4.53235 15.5 3.69288 15.5 2.65735C15.5 1.62181 14.6605 0.782349 13.625 0.782349C12.5895 0.782349 11.75 1.62181 11.75 2.65735C11.75 3.69288 12.5895 4.53235 13.625 4.53235ZM9.875 8.28235C9.875 9.31788 9.03553 10.1573 8 10.1573C6.96447 10.1573 6.125 9.31788 6.125 8.28235C6.125 7.24681 6.96447 6.40735 8 6.40735C9.03553 6.40735 9.875 7.24681 9.875 8.28235ZM2.375 10.1573C3.41053 10.1573 4.25 9.31788 4.25 8.28235C4.25 7.24681 3.41053 6.40735 2.375 6.40735C1.33947 6.40735 0.5 7.24681 0.5 8.28235C0.5 9.31788 1.33947 10.1573 2.375 10.1573ZM15.5 8.28235C15.5 9.31788 14.6605 10.1573 13.625 10.1573C12.5895 10.1573 11.75 9.31788 11.75 8.28235C11.75 7.24681 12.5895 6.40735 13.625 6.40735C14.6605 6.40735 15.5 7.24681 15.5 8.28235ZM8 15.7823C9.03553 15.7823 9.875 14.9429 9.875 13.9073C9.875 12.8718 9.03553 12.0323 8 12.0323C6.96447 12.0323 6.125 12.8718 6.125 13.9073C6.125 14.9429 6.96447 15.7823 8 15.7823Z"
      />
    </Svg.Svg>
  );
};

const RequestAmount = () => {
  const theme = useTheme() as BitPayTheme;
  const fill = theme.dark ? White : Action;

  return (
    <Svg.Svg width="19" height="20" viewBox="0 0 19 20" fill="none">
      <Svg.Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.58334 2.12128H8.70834V9.24628H1.58334V2.12128ZM7.41289 7.95082V3.41673H2.8788V7.95082H7.41289Z"
      />
      <Svg.Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.58334 10.8296H8.70834V17.9546H1.58334V10.8296ZM7.41289 16.6592V12.1251H2.8788V16.6592H7.41289Z"
      />
      <Svg.Path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2917 2.12128H17.4167V9.24628H10.2917V2.12128ZM16.1212 7.95082V3.41673H11.5871V7.95082H16.1212Z"
      />
      <Svg.Rect
        fill={fill}
        x="3.95834"
        y="4.49628"
        width="2.375"
        height="2.375"
      />
      <Svg.Rect
        fill={fill}
        x="12.6667"
        y="4.49628"
        width="2.375"
        height="2.375"
      />
      <Svg.Rect
        fill={fill}
        x="3.95834"
        y="13.2046"
        width="2.375"
        height="2.375"
      />
      <Svg.Path
        fill={fill}
        d="M17.4167 10.8296V14.788H16.1212V12.1491H14.8258V14.1282H10.2917V11.4893H11.5871V12.8088H13.5303V10.8296H17.4167Z"
      />
      <Svg.Path
        fill={fill}
        d="M11.5584 15.5796V16.7671H16.625V17.9546H10.2917V15.5796H11.5584Z"
      />
    </Svg.Svg>
  );
};

const Settings = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <Svg.Path
        fill={theme.dark ? White : Action}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 2.29167V0.833333C7.5 0.718274 7.63991 0.625 7.8125 0.625C7.98509 0.625 8.125 0.718274 8.125 0.833333V2.29167C8.125 2.40673 7.98509 2.5 7.8125 2.5C7.63991 2.5 7.5 2.40673 7.5 2.29167ZM8.05556 6.46277V14.1489C8.05556 14.2738 7.94674 14.375 7.8125 14.375C7.67826 14.375 7.56944 14.2738 7.56944 14.1489V6.46277H5.86806C5.73382 6.46277 5.625 6.36155 5.625 6.2367V3.97606C5.625 3.85121 5.73382 3.75 5.86806 3.75H9.75694C9.89118 3.75 10 3.85121 10 3.97606V6.2367C10 6.36155 9.89118 6.46277 9.75694 6.46277H8.05556ZM3.68056 14.15V11.45H5.38194C5.51618 11.45 5.625 11.3493 5.625 11.225V8.975C5.625 8.85074 5.51618 8.75 5.38194 8.75H1.49306C1.35882 8.75 1.25 8.85074 1.25 8.975V11.225C1.25 11.3493 1.35882 11.45 1.49306 11.45H3.19444V14.15C3.19444 14.2743 3.30326 14.375 3.4375 14.375C3.57174 14.375 3.68056 14.2743 3.68056 14.15ZM3.75 0.846774V7.27823C3.75 7.40071 3.61009 7.5 3.4375 7.5C3.26491 7.5 3.125 7.40071 3.125 7.27823V0.846774C3.125 0.724292 3.26491 0.625 3.4375 0.625C3.61009 0.625 3.75 0.724292 3.75 0.846774ZM11.875 0.846774V7.27823C11.875 7.40071 12.0149 7.5 12.1875 7.5C12.3601 7.5 12.5 7.40071 12.5 7.27823V0.846774C12.5 0.724292 12.3601 0.625 12.1875 0.625C12.0149 0.625 11.875 0.724292 11.875 0.846774ZM10 11.225V8.975C10 8.85074 10.1088 8.75 10.2431 8.75H14.1319C14.2662 8.75 14.375 8.85074 14.375 8.975V11.225C14.375 11.3493 14.2662 11.45 14.1319 11.45H12.4306V14.15C12.4306 14.2743 12.3217 14.375 12.1875 14.375C12.0533 14.375 11.9444 14.2743 11.9444 14.15V11.45H10.2431C10.1088 11.45 10 11.3493 10 11.225Z"
      />
    </Svg.Svg>
  );
};

const ShareAddress = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="19" height="20" viewBox="0 0 19 20" fill="none">
      <Svg.Path
        fill={theme.dark ? White : Action}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 0.537933L13.4583 5.28793H10.2917V8.4546H8.70833V5.28793H5.54167L9.5 0.537933ZM8.70833 8.4546L3.16667 8.4546C2.72944 8.4546 2.375 8.80904 2.375 9.24627V18.7463C2.375 19.1835 2.72944 19.5379 3.16667 19.5379H15.8333C16.2706 19.5379 16.625 19.1835 16.625 18.7463V9.24627C16.625 8.80904 16.2706 8.4546 15.8333 8.4546H10.2917V13.9963H8.70833L8.70833 8.4546Z"
      />
    </Svg.Svg>
  );
};

const DownToggle = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="10" height="7" viewBox="0 0 10 7" fill="none">
      <Svg.Path
        fill={theme.dark ? White : '#1a051d'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.17422 0C0.319868 0 -0.141042 1.00212 0.414964 1.65079L4.24074 6.1142C4.63984 6.57981 5.36016 6.57981 5.75926 6.1142L9.58504 1.65079C10.141 1.00212 9.68013 0 8.82578 0H1.17422Z"
      />
    </Svg.Svg>
  );
};

const Cog = () => {
  const theme = useTheme() as BitPayTheme;

  return (
    <Svg.Svg width="20px" height="20px" viewBox="0 0 24 24">
      <Svg.G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <Svg.G
          id="Artboard-Copy-69"
          transform="translate(-309.000000, -27.000000)"
          fill={theme.dark ? White : SlateDark}>
          <Svg.G id="Tabs/Wallets">
            <Svg.G id="Settings" transform="translate(280.000000, 1.000000)">
              <Svg.G
                id="Generic/Small/Settings"
                transform="translate(29.000000, 26.000000)">
                <Svg.G id="settings-gear">
                  <Svg.Path
                    d="M20.872,13.453 C20.9537653,12.972909 20.9965715,12.4869919 21,12 C20.9965715,11.5130081 20.9537653,11.027091 20.872,10.547 L22.972,8.518 C23.3014584,8.19919706 23.371936,7.69719821 23.143,7.3 L21.643,4.7 C21.4110152,4.30446242 20.9414902,4.11509143 20.5,4.239 L17.7,5.039 C16.9419059,4.42152683 16.0884306,3.93146247 15.173,3.588 L14.47,0.758 C14.3589292,0.312671834 13.9589705,0 13.5,0 L10.5,0 C10.0410295,0 9.64107084,0.312671834 9.53,0.758 L8.823,3.588 C7.90897533,3.93185202 7.05687784,4.42190095 6.3,5.039 L3.5,4.239 C3.05853017,4.11546064 2.58922628,4.30474244 2.357,4.7 L0.857,7.3 C0.627535562,7.69743398 0.698040781,8.20004136 1.028,8.519 L3.128,10.548 C3.04628835,11.0277616 3.00348235,11.5133421 3,12 C3.00342848,12.4869919 3.04623467,12.972909 3.128,13.453 L1.028,15.482 C0.698541645,15.8008029 0.628063973,16.3028018 0.857,16.7 L2.357,19.3 C2.53580678,19.6097028 2.86638627,19.8003484 3.224,19.8 C3.31694619,19.7995843 3.40942403,19.7868055 3.499,19.762 L6.299,18.962 C7.05709407,19.5794732 7.91056935,20.0695375 8.826,20.413 L9.533,23.243 C9.64418563,23.6868483 10.0424394,23.9986148 10.5,24 L13.5,24 C13.9589705,24 14.3589292,23.6873282 14.47,23.242 L15.177,20.412 C16.0910247,20.068148 16.9431222,19.578099 17.7,18.961 L20.5,19.761 C20.589576,19.7858055 20.6820538,19.7985843 20.775,19.799 C21.1326137,19.7993484 21.4631932,19.6087028 21.642,19.299 L23.142,16.699 C23.3714644,16.301566 23.3009592,15.7989586 22.971,15.48 L20.872,13.453 Z M12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 C14.209139,8 16,9.790861 16,12 C16,13.060866 15.5785726,14.0782816 14.8284271,14.8284271 C14.0782816,15.5785726 13.060866,16 12,16 Z"
                    id="Shape"
                  />
                </Svg.G>
              </Svg.G>
            </Svg.G>
          </Svg.G>
        </Svg.G>
      </Svg.G>
    </Svg.Svg>
  );
};

const Delete = () => {
  const theme = useTheme() as BitPayTheme;
  return (
    <Svg.Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <Svg.Rect
        width="21"
        height="21"
        rx="6"
        fill={theme.dark ? Slate : NeutralSlate}
      />
      <Svg.Rect
        x="7.37384"
        y="14.4077"
        width="1.10526"
        height="9.94737"
        rx="0.552632"
        transform="rotate(-135 7.37384 14.4077)"
        fill={theme.dark ? Black : Slate}
      />
      <Svg.Rect
        x="14.4077"
        y="13.6261"
        width="1.10526"
        height="9.94737"
        rx="0.552632"
        transform="rotate(135 14.4077 13.6261)"
        fill={theme.dark ? Black : Slate}
      />
    </Svg.Svg>
  );
};

const Wallet = () => {
  const theme = useTheme() as BitPayTheme;
  const fill = theme.dark ? White : Action;

  return (
    <Svg.Svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <Svg.Path
        d="M5.625 0H0.84375C0.39375 0 0 0.39375 0 0.84375C0 1.29375 0.39375 1.6875 0.84375 1.6875H5.625V0Z"
        fill={fill}
      />
      <Svg.Path
        d="M8.4375 2.8125H0V7.875C0 8.49375 0.50625 9 1.125 9H8.4375C8.775 9 9 8.775 9 8.4375V3.375C9 3.0375 8.775 2.8125 8.4375 2.8125ZM7.03125 6.75C6.58125 6.75 6.1875 6.35625 6.1875 5.90625C6.1875 5.45625 6.58125 5.0625 7.03125 5.0625C7.48125 5.0625 7.875 5.45625 7.875 5.90625C7.875 6.35625 7.48125 6.75 7.03125 6.75Z"
        fill={fill}
      />
    </Svg.Svg>
  );
};

const Network = () => {
  const theme = useTheme() as BitPayTheme;
  const fill = theme.dark ? White : Action;

  return (
    <Svg.Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <Svg.Path d="M6.25 7.5H3.75V10H6.25V7.5Z" fill={fill} />
      <Svg.Path d="M6.25 0H3.75V2.5H6.25V0Z" fill={fill} />
      <Svg.Path d="M10 7.5H7.5V10H10V7.5Z" fill={fill} />
      <Svg.Path d="M2.5 7.5H0V10H2.5V7.5Z" fill={fill} />
      <Svg.Path
        d="M1.875 5.625H4.375V6.875H5.625V5.625H8.125V6.875H9.375V5C9.375 4.625 9.125 4.375 8.75 4.375H5.625V3.125H4.375V4.375H1.25C0.875 4.375 0.625 4.625 0.625 5V6.875H1.875V5.625Z"
        fill={fill}
      />
    </Svg.Svg>
  );
};

const SelectInputs = () => {
  const theme = useTheme() as BitPayTheme;
  return (
    <Svg.Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
      <Svg.Path
        d="M8.5 0.823364L13.2222 5.07336H9.44444V7.9067H7.55556V5.07336H3.77778L8.5 0.823364Z"
        fill={theme.dark ? White : Action}
      />
      <Svg.Path
        d="M7.55556 7.9067L0.944444 7.9067C0.422842 7.9067 0 8.22383 0 8.61503V17.115C0 17.5062 0.422842 17.8234 0.944444 17.8234H16.0556C16.5772 17.8234 17 17.5062 17 17.115V8.61503C17 8.22383 16.5772 7.9067 16.0556 7.9067L9.44444 7.9067V12.865H7.55556V7.9067Z"
        fill={theme.dark ? White : Action}
      />
    </Svg.Svg>
  );
};

const Multisend = () => {
  const theme = useTheme() as BitPayTheme;
  return (
    <Svg.Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
      <Svg.Path
        d="M16.5545 11.4071L13.9039 10.065C13.6354 9.92957 13.4591 9.60165 13.4583 9.23652V8.45096C14.3327 7.81714 14.8728 6.64204 14.875 5.36865V3.7331C14.8998 1.85199 13.7981 0.249727 12.32 0.0173302C11.524 -0.0819422 10.7318 0.248451 10.1391 0.926944C9.54632 1.60544 9.20826 2.5688 9.20833 3.57921V5.36865C9.21053 6.64204 9.75062 7.81714 10.625 8.45096V9.23652C10.3918 9.97439 9.99907 10.6146 9.49166 11.0841C9.44349 11.1235 9.39674 11.1673 9.34999 11.2076L9.99529 11.5342C10.8046 11.9385 11.3355 12.9275 11.3333 14.0268V16.1053C11.331 16.4108 11.2869 16.7135 11.203 17H16.2917C16.6829 17 17 16.5994 17 16.1053V12.2374C16.9998 11.8716 16.8234 11.5428 16.5545 11.4071Z"
        fill={theme.dark ? White : Action}
      />
      <Svg.Path
        d="M9.47113 13.1966L6.82054 11.8545C6.5521 11.719 6.37576 11.3911 6.375 11.026V10.6224C7.19448 10.5299 7.98395 10.1875 8.67567 9.62484C8.82922 9.48152 8.92976 9.26518 8.95397 9.02596C8.97817 8.78674 8.92395 8.54541 8.80387 8.35791C8.23467 7.52714 7.88132 6.49549 7.79167 5.40265C7.83388 4.12539 7.3168 2.92223 6.44583 2.27114C5.56238 1.61356 4.4681 1.60231 3.57629 2.24163C2.68447 2.88096 2.13104 4.07342 2.125 5.36865C2.0431 6.47444 1.68913 7.52007 1.11279 8.35881C0.992747 8.54616 0.938543 8.78734 0.962754 9.02642C0.986965 9.2655 1.08749 9.48168 1.241 9.62484C1.93272 10.1875 2.72218 10.5299 3.54167 10.6224V11.026C3.54148 11.3918 3.36504 11.7206 3.09613 11.8563L0.445542 13.1983C0.177101 13.3338 0.000761483 13.6617 0 14.0269V16.1053C0 16.5994 0.317132 17 0.708333 17H9.20833C9.59954 17 9.91667 16.5994 9.91667 16.1053V14.0269C9.91648 13.6611 9.74004 13.3323 9.47113 13.1966Z"
        fill={theme.dark ? White : Action}
      />
    </Svg.Svg>
  );
};

const BridgeToPolygon = () => {
  const theme = useTheme() as BitPayTheme;
  return (
    <Svg.Svg width="20" height="19" viewBox="0 0 20 19" fill="none">
      <Svg.Path
        d="M18.5784 9.92661H12.0976C11.983 9.92661 11.8731 9.88109 11.7921 9.80007C11.711 9.71904 11.6655 9.60914 11.6655 9.49456C11.6655 9.37997 11.711 9.27007 11.7921 9.18905C11.8731 9.10802 11.983 9.0625 12.0976 9.0625H18.5784C18.693 9.0625 18.8029 9.10802 18.8839 9.18905C18.965 9.27007 19.0105 9.37997 19.0105 9.49456C19.0105 9.60914 18.965 9.71904 18.8839 9.80007C18.8029 9.88109 18.693 9.92661 18.5784 9.92661Z"
        fill={theme.dark ? White : Action}
      />
      <Svg.Path
        d="M9.50522 9.92661H0.432055C0.317467 9.92661 0.207572 9.88109 0.126546 9.80007C0.04552 9.71904 0 9.60914 0 9.49456C0 9.37997 0.04552 9.27007 0.126546 9.18905C0.207572 9.10802 0.317467 9.0625 0.432055 9.0625H9.50522C9.61981 9.0625 9.7297 9.10802 9.81073 9.18905C9.89176 9.27007 9.93728 9.37997 9.93728 9.49456C9.93728 9.60914 9.89176 9.71904 9.81073 9.80007C9.7297 9.88109 9.61981 9.92661 9.50522 9.92661Z"
        fill={theme.dark ? White : Action}
      />
      <Svg.Path
        d="M12.9617 13.3832H10.3694V5.6062H12.9617C13.0414 5.60621 13.1195 5.58418 13.1875 5.54254C13.2555 5.5009 13.3106 5.44128 13.3467 5.37027C13.3829 5.29926 13.3987 5.21962 13.3925 5.14017C13.3862 5.06072 13.3581 4.98456 13.3112 4.92009L9.85479 0.167484C9.81276 0.115204 9.75955 0.0730181 9.69905 0.0440325C9.63856 0.0150468 9.57234 0 9.50526 0C9.43818 0 9.37196 0.0150468 9.31146 0.0440325C9.25097 0.0730181 9.19775 0.115204 9.15573 0.167484L5.69928 4.92009C5.65242 4.98456 5.6243 5.06072 5.61804 5.14017C5.61177 5.21962 5.6276 5.29926 5.66378 5.37027C5.69995 5.44128 5.75507 5.5009 5.82302 5.54254C5.89097 5.58418 5.96912 5.60621 6.04882 5.6062H8.64115V13.3832H6.04882C5.96912 13.3832 5.89097 13.4052 5.82302 13.4469C5.75507 13.4885 5.69995 13.5481 5.66378 13.6191C5.6276 13.6901 5.61177 13.7698 5.61804 13.8492C5.6243 13.9287 5.65242 14.0048 5.69928 14.0693L9.15573 18.8219C9.1958 18.8771 9.24837 18.922 9.30912 18.9529C9.36987 18.9839 9.43708 19 9.50526 19C9.57344 19 9.64065 18.9839 9.7014 18.9529C9.76215 18.922 9.81471 18.8771 9.85479 18.8219L13.3112 14.0693C13.3581 14.0048 13.3862 13.9287 13.3925 13.8492C13.3987 13.7698 13.3829 13.6901 13.3467 13.6191C13.3106 13.5481 13.2555 13.4885 13.1875 13.4469C13.1195 13.4052 13.0414 13.3832 12.9617 13.3832V13.3832Z"
        fill={theme.dark ? White : Action}
      />
    </Svg.Svg>
  );
};

export default {
  Add,
  Backup,
  Encrypt,
  RequestAmount,
  ShareAddress,
  Settings,
  DownToggle,
  Cog,
  Delete,
  Wallet,
  Network,
  SelectInputs,
  Multisend,
  BridgeToPolygon,
};
