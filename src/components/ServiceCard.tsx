'use client';

import { usePathname } from 'next/navigation';
import { Card, CardContent } from './ui/Card';
import NumberIcon from './ui/NumberIcon';
import { 
  Stethoscope, 
  Shield, 
  Wrench, 
  AlertCircle, 
  Sparkles, 
  Users,
  Eye,
  Heart,
  Activity,
  Settings,
  UserCheck,
  Zap,
  Scissors,
  Palette,
  Crown,
  Smile
} from 'lucide-react';

interface ServiceCardProps {
  serviceKey: string;
  number: number;
  onClick?: () => void;
}

const serviceIcons = {
  rootCanal: Activity,
  preventiveDentistry: Shield,
  cosmeticDentistry: Palette,
  wisdomTeethExtraction: Scissors,
  teethWhitening: Sparkles,
  periodontics: Stethoscope,
  veneers: Crown,
  bruxism: Zap,
  crownsAndBridges: Wrench,
  dentures: UserCheck,
  implants: Smile,
  emergencies: AlertCircle
};

const serviceData = {
  rootCanal: {
    title: {
      fr: 'Traitement de canal',
      en: 'Root Canal Treatment'
    },
    description: {
      fr: 'Endodontie pour sauver vos dents naturelles',
      en: 'Endodontics to save your natural teeth'
    }
  },
  preventiveDentistry: {
    title: {
      fr: 'Dentisterie préventive',
      en: 'Preventive Dentistry'
    },
    description: {
      fr: 'Examens et nettoyages réguliers',
      en: 'Regular exams and cleanings'
    }
  },
  cosmeticDentistry: {
    title: {
      fr: 'Dentisterie esthétique',
      en: 'Cosmetic Dentistry'
    },
    description: {
      fr: 'Améliorer l\'apparence de votre sourire',
      en: 'Improve the appearance of your smile'
    }
  },
  wisdomTeethExtraction: {
    title: {
      fr: 'Extraction de dents de sagesse',
      en: 'Wisdom Tooth Extraction'
    },
    description: {
      fr: 'Extractions sécuritaires et confortables',
      en: 'Safe and comfortable extractions'
    }
  },
  teethWhitening: {
    title: {
      fr: 'Blanchiment dentaire',
      en: 'Teeth Whitening'
    },
    description: {
      fr: 'Retrouvez un sourire éclatant',
      en: 'Restore your bright smile'
    }
  },
  periodontics: {
    title: {
      fr: 'Parodontie et maladie de gencives',
      en: 'Periodontics and Gum Disease'
    },
    description: {
      fr: 'Traitement des maladies gingivales',
      en: 'Treatment of gum diseases'
    }
  },
  veneers: {
    title: {
      fr: 'Facettes',
      en: 'Veneers'
    },
    description: {
      fr: 'Transformez votre sourire',
      en: 'Transform your smile'
    }
  },
  bruxism: {
    title: {
      fr: 'Bruxisme',
      en: 'Bruxism'
    },
    description: {
      fr: 'Traitement du grincement des dents',
      en: 'Treatment of teeth grinding'
    }
  },
  crownsAndBridges: {
    title: {
      fr: 'Couronnes et ponts',
      en: 'Crowns and Bridges'
    },
    description: {
      fr: 'Restaurations durables et esthétiques',
      en: 'Durable and aesthetic restorations'
    }
  },
  dentures: {
    title: {
      fr: 'Prothèses',
      en: 'Dentures'
    },
    description: {
      fr: 'Solutions confortables pour remplacer les dents',
      en: 'Comfortable solutions to replace teeth'
    }
  },
  implants: {
    title: {
      fr: 'Implants dentaires',
      en: 'Dental Implants'
    },
    description: {
      fr: 'Solutions permanentes pour remplacer les dents manquantes',
      en: 'Permanent solutions to replace missing teeth'
    }
  },
  emergencies: {
    title: {
      fr: 'Urgences dentaires',
      en: 'Dental Emergencies'
    },
    description: {
      fr: 'Soins d\'urgence disponibles',
      en: 'Emergency care available'
    }
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceKey, number, onClick }) => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const lang = isEnglish ? 'en' : 'fr';
  
  const IconComponent = serviceIcons[serviceKey as keyof typeof serviceIcons] || Stethoscope;
  const service = serviceData[serviceKey as keyof typeof serviceData];

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg cursor-pointer group" onClick={onClick}>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <NumberIcon
            number={number}
            icon={<IconComponent className="h-12 w-12 text-dental-primary group-hover:text-dental-dark transition-colors" />}
            isClickable={false}
          />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-dental-dark group-hover:text-dental-primary transition-colors">
          {service?.title?.[lang] || (isEnglish ? 'Service' : 'Service')}
        </h3>
        <p className="text-gray-600 text-sm">
          {service?.description?.[lang] || (isEnglish ? 'Service description' : 'Description du service')}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
