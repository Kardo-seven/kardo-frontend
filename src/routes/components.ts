import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const DirectionsPage = lazy(() => import('../pages/DirectionsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const ContentPage = lazy(() => import('../pages/ContentPage'));
const EditProfilePage = lazy(() => import('../pages/EditProfilePage'));
const SettingsAccountPage = lazy(() => import('../pages/SettingsAccountPage'));
const DocumentsPage = lazy(() => import('../pages/DocumentsPage'));
const ContestsPage = lazy(() => import('../pages/ContestsPage'));
const PrizePage = lazy(() => import('../pages/PrizePage'));
const ApplyPage = lazy(() => import('../pages/ApplyPage'));
const ResourсesPage = lazy(() => import('../pages/ResoursesPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const VideoContestsPage = lazy(() => import('../pages/VideoContestPage'));
const ChildrenPage = lazy(() => import('../pages/ChildrenPage'));
const AboutDirectionPage = lazy(() => import('../pages/AboutDirectionPage'));
const ProgramsPage = lazy(() => import('../pages/ProgramsPage'));

export {
  LoginPage,
  NotFoundPage,
  MainPage,
  EventsPage,
  DirectionsPage,
  ProfilePage,
  ContentPage,
  EditProfilePage,
  ContestsPage,
  SettingsAccountPage,
  DocumentsPage,
  PrizePage,
  ApplyPage,
  ResourсesPage,
  ProjectsPage,
  VideoContestsPage,
  ChildrenPage,
  AboutDirectionPage,
  ProgramsPage,
};

