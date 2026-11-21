import React from 'react';
import { SimulatorType } from '../../types';
import {
  NumberLineSim,
  TugOfWarSim,
  SignMachineSim,
  PrimeFactorTreeSim,
  StrawPatternSim,
  BalanceScaleSim,
  TransposeDemoSim,
  TermOrganizerSim,
  SubstitutionSim,
  ProportionRatioSim,
  LinearGraphSim,
  InverseGraphSim,
  LineAngleViewerSim,
  CompassBisectorSim,
  SectorCalculatorSim,
  ProjectionViewerSim,
  CubeSkewLinesSim,
  ConeUnfoldSim,
  SolidVolumeSim,
  SphereFormulaSim,
  HistogramViewerSim,
  MeanMedianModeSim,
  RelativeFreqSim,
  RelativeFreqCompareSim,
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
    case 'primeFactorTree':
      return <PrimeFactorTreeSim />;
    case 'strawPattern':
      return <StrawPatternSim />;
    case 'balanceScale':
      return <BalanceScaleSim />;
    case 'transposeDemo':
      return <TransposeDemoSim />;
    case 'termOrganizer':
      return <TermOrganizerSim />;
    case 'substitutionTool':
      return <SubstitutionSim />;
    case 'proportionRatio':
      return <ProportionRatioSim />;
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
    case 'projectionViewer':
      return <ProjectionViewerSim />;
    case 'cubeSkewLines':
      return <CubeSkewLinesSim />;
    case 'coneUnfold':
      return <ConeUnfoldSim />;
    case 'solidVolume':
      return <SolidVolumeSim />;
    case 'sphereFormula':
      return <SphereFormulaSim />;
    case 'histogramViewer':
      return <HistogramViewerSim />;
    case 'meanMedianMode':
      return <MeanMedianModeSim />;
    case 'relativeFreqSim':
      return <RelativeFreqSim />;
    case 'relativeFreqCompare':
      return <RelativeFreqCompareSim />;
    default:
      return null;
  }
};
