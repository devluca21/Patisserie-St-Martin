import { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Our Team | Dr Georgette Elias Dental Clinic - Montreal',
  description: 'Meet Dr Georgette Elias and our team of dedicated dental professionals committed to your oral health. Expertise and personalized care in Montreal.',
  keywords: [
    'dr georgette elias montreal',
    'dentist montreal',
    'dental team montreal',
    'dental surgeon montreal',
    'dental clinic montreal',
    'dental expertise montreal',
    'personalized care montreal',
    'dental professionals montreal',
    'oral health montreal',
    'dental experience montreal'
  ],
  openGraph: {
    title: 'Our Team | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Meet Dr Georgette Elias and our team of dedicated dental professionals committed to your oral health. Expertise and personalized care in Montreal.',
    url: 'https://www.dentistegeorgetteelias.com/en/equipe',
    siteName: 'Dr Georgette Elias Dental Clinic',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Team - Dr Georgette Elias Dental Clinic - Montreal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Meet Dr Georgette Elias and our team of dedicated dental professionals committed to your oral health.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/en/equipe',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com/equipe',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en/equipe',
    },
  },
};

export default function EquipePage() {
  return (
    <>
      <JsonLD />
      <div className="min-h-screen bg-gradient-to-b from-dental-light to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-dark mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of passionate professionals dedicated to your oral health and well-being.
            </p>
          </div>

          {/* Dr Georgette Elias Profile */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-dental-dark mb-4">
                  Dr Georgette Elias, D.M.D.
                </h2>
                <p className="text-xl text-dental-primary font-semibold mb-6">
                  General Dentist
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Dr Georgette Elias is a passionate dentist who is committed to providing the highest quality 
                    dental care in a warm and welcoming atmosphere. With years of experience in general dentistry, 
                    she combines technical expertise with a human approach to ensure the comfort and satisfaction 
                    of every patient.
                  </p>
                  <p>
                    Her preventive approach and patient-centered philosophy make her a dentist of choice for 
                    the whole family. Dr Elias takes the time to listen to her patients' concerns and clearly 
                    explain all aspects of their treatment.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src="/slide-01-1.jpg"
                    alt="Dr Georgette Elias"
                    fill
                    className="object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Pictures Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-dental-dark mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/reception.jpg"
                    alt="Team member - Reception"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-dental-dark">Reception</h3>
                <p className="text-gray-600 text-sm">Welcome and care coordination</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/img-06.jpg"
                    alt="Team member - Care"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-dental-dark">Care</h3>
                <p className="text-gray-600 text-sm">Dental care professional</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/img-08.jpg"
                    alt="Team member - Support"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-dental-dark">Support</h3>
                <p className="text-gray-600 text-sm">Assistance and coordination</p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Doctor of Dental Medicine (D.M.D.) with continuing education in modern dentistry
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Accreditations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Member of the Ordre des dentistes du Québec and professional associations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Preventive care and gentle approach for optimal patient comfort
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Years of experience in family dentistry and care for all ages
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Specialities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-dental-dark mb-8 text-center">
              Specialties and Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Preventive Dentistry</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Routine exams</li>
                  <li>• Professional cleanings</li>
                  <li>• Digital X-rays</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Restorative Care</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Aesthetic fillings</li>
                  <li>• Crowns and bridges</li>
                  <li>• Root canal treatments</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Cosmetic Dentistry</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Teeth whitening</li>
                  <li>• Porcelain veneers</li>
                  <li>• Smile makeover</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Specialized Care</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Dental implants</li>
                  <li>• Complete and partial dentures</li>
                  <li>• Gum treatment</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Family Dentistry</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Children's care</li>
                  <li>• Adult care</li>
                  <li>• Senior care</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Emergencies</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Pain relief</li>
                  <li>• Emergency repairs</li>
                  <li>• Immediate consultations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="bg-dental-primary text-white rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                <p className="text-white text-opacity-90">
                  We treat every patient with empathy and understanding, creating a safe and reassuring environment.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-white text-opacity-90">
                  We are committed to providing the highest quality care using the latest technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Communication</h3>
                <p className="text-white text-opacity-90">
                  We take the time to clearly explain all treatments and answer all your questions.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dental-dark mb-4">
              Meet our team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Come discover why so many families trust us with their dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15147226575"
                className="inline-flex items-center justify-center gap-2 bg-dental-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-dental-dark transition-colors"
              >
                Call Now
              </a>
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-dental-primary text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-dental-primary hover:text-white transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
