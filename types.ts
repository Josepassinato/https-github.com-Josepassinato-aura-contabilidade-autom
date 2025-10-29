
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SocialLink {
    href: string;
    icon: React.ReactNode;
    name: string;
}

export interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    value: string;
    href?: string;
}
