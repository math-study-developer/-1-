import React from 'react';
import { SimulatorType } from '../../types';
import {
  NumberLineSim,
  TugOfWarSim,
  SignMachineSim,
  BalanceScaleSim,
  TransposeDemoSim,
  TermOrganizerSim,
  SubstitutionSim,
  LinearGraphSim,
  InverseGraphSim,
  LineAngleViewerSim,
  CompassBisectorSim,
  SectorCalculatorSim,
  CubeSkewLinesSim,
  SolidVolumeSim,
  SphereFormulaSim,
  HistogramViewerSim,
  MeanMedianModeSim,
} from './Simulators';

interface SimulatorContainerProps {
  type?: SimulatorType;
}

export const SimulatorContainer: React.FC<SimulatorContainerProps> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    case 'numberLine':
      return <NumberLineSim />;
    case 'tugOfWar':
      return <TugOfWarSim />;
    case 'signMachine':
      return <SignMachineSim />;
    case 'balanceScale':
      return <BalanceScaleSim />;
    case 'transposeDemo':
      return <TransposeDemoSim />;
    case 'termOrganizer':
      return <TermOrganizerSim />;
    case 'substitutionTool':
      return <SubstitutionSim />;
    case 'linearGraph':
      return <LinearGraphSim />;
    case 'inverseGraph':
      return <InverseGraphSim />;
    case 'lineAngleViewer':
      return <LineAngleViewerSim />;
    case 'compassBisector':
      return <CompassBisectorSim />;
    case 'sectorCalculator':
      return <SectorCalculatorSim />;
    case 'cubeSkewLines':
      return <CubeSkewLinesSim />;
    case 'solidVolume':
      return <SolidVolumeSim />;
    case 'sphereFormula':
      return <SphereFormulaSim />;
    case 'histogramViewer':
      return <HistogramViewerSim />;
    case 'meanMedianMode':
      return <MeanMedianModeSim />;
    default:
      return null;
  }
};
