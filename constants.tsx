
import React from 'react';
import { NavLink, Service, SocialLink, ContactInfo } from './types';
import { 
    WalletIcon, ChartPieIcon, LandmarkIcon, FileSignatureIcon, BuildingColumnsIcon, GlobeIcon,
    InstagramIcon, FacebookIcon, LinkedinIcon,
    MapPinIcon, PhoneIcon, MailIcon, CheckCircleIcon
} from './components/Icons';

export const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Replace with actual number

export const NAV_LINKS: NavLink[] = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export const SERVICES_DATA: Service[] = [
  {
    icon: <WalletIcon />,
    title: 'Abertura de Empresa',
    description: 'Processo de abertura de empresa simplificado e rápido, garantindo conformidade e agilidade para você começar a empreender.',
  },
  {
    icon: <ChartPieIcon />,
    title: 'Contabilidade Consultiva',
    description: 'Análise aprofundada das suas finanças para otimizar a gestão, reduzir custos e impulsionar o crescimento do seu negócio.',
  },
  {
    icon: <LandmarkIcon />,
    title: 'Planejamento Tributário',
    description: 'Estratégias para reduzir a carga tributária da sua empresa de forma legal, maximizando seus lucros e evitando problemas fiscais.',
  },
  {
    icon: <FileSignatureIcon />,
    title: 'BPO Financeiro',
    description: 'Terceirização completa da sua gestão financeira, permitindo que você foque no que realmente importa: o core business da sua empresa.',
  },
  {
    icon: <BuildingColumnsIcon />,
    title: 'Imposto de Renda PF',
    description: 'Assessoria completa para a sua declaração de Imposto de Renda, garantindo precisão, tranquilidade e evitando a malha fina.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Estudo de Viabilidade',
    description: 'Análise detalhada para avaliar a viabilidade econômica e financeira de novos projetos, garantindo decisões mais seguras e rentáveis.',
  },
];

export const ABOUT_POINTS = [
    { icon: <CheckCircleIcon />, title: "Missão", text: "Simplificar a contabilidade com tecnologia e expertise, impulsionando o sucesso dos nossos clientes." },
    { icon: <CheckCircleIcon />, title: "Visão", text: "Ser referência em contabilidade digital e consultiva, reconhecida pela excelência e inovação." },
    { icon: <CheckCircleIcon />, title: "Valores", text: "Ética, transparência, compromisso, inovação e foco no cliente são os pilares que nos guiam." },
];

export const CONTACT_INFO: ContactInfo[] = [
    {
        icon: <MapPinIcon />,
        title: "Endereço",
        value: "Av. Principal, 123, São Paulo, SP",
    },
    {
        icon: <PhoneIcon />,
        title: "Telefone",
        value: "(11) 99999-9999",
        href: "tel:+5511999999999",
    },
    {
        icon: <MailIcon />,
        title: "Email",
        value: "contato@auracontabil.com",
        href: "mailto:contato@auracontabil.com",
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: '#', icon: <InstagramIcon />, name: 'Instagram' },
  { href: '#', icon: <FacebookIcon />, name: 'Facebook' },
  { href: '#', icon: <LinkedinIcon />, name: 'LinkedIn' },
];
