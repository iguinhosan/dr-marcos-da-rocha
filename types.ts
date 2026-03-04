import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}