import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Canadian Dental Care Plan (CDCP) | Dr Georgette Elias Dental Clinic - Montreal',
  description: 'Complete information about CDCP: eligibility, how to apply, dental care coverage. Official partner in Montreal.',
  keywords: [
    'CDCP montreal',
    'canadian dental care plan',
    'government dental insurance',
    'free dental care montreal',
    'CDCP eligibility',
    'apply CDCP montreal',
    'dental insurance quebec',
    'affordable dental care',
    'federal dental plan',
    'CDCP partner clinic'
  ],
  openGraph: {
    title: 'Canadian Dental Care Plan (CDCP) | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Complete information about CDCP: eligibility, how to apply, dental care coverage. Official partner in Montreal.',
    url: 'https://www.dentistegeorgetteelias.com/en/cdcp',
    siteName: 'Dr Georgette Elias Dental Clinic',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'CDCP - Canadian Dental Care Plan - Dr Georgette Elias Dental Clinic - Montreal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDCP - Canadian Dental Care Plan | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Complete information about CDCP: eligibility, how to apply, dental care coverage.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/en/cdcp',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com/cdcp',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en/cdcp',
    },
  },
};

export default function CDCPPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dental-dark mb-4">
          Canadian Dental Care Plan (CDCP)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The Government of Canada has launched the Canadian Dental Care Plan (CDCP) to improve the accessibility and affordability of dental care.
        </p>
      </div>

      {/* How it works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          How does CDCP work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-dental-primary" />
                Program start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                CDCP is a state-funded dental benefits plan that begins in May 2024. It targets people whose annual family income is less than $90,000 and who do not have private dental insurance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-dental-primary" />
                Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This plan covers part of the costs associated with oral health treatments to prevent and treat oral diseases, thus protecting against more serious health problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Eligibility */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Eligibility criteria
        </h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Be a Canadian resident for tax purposes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Have filed a tax return for the previous year</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Not have private dental insurance or a retirement plan</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Have a net family income (after tax) of less than $90,000 annually</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Not have employer dental insurance</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Phases */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Application phases
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-dental-light">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eligible age groups</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Application opening date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Seniors 87+</td>
                <td className="border border-gray-300 px-4 py-3">December 2023</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Seniors between 77-86</td>
                <td className="border border-gray-300 px-4 py-3">January 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Seniors between 72-76</td>
                <td className="border border-gray-300 px-4 py-3">February 2024</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Seniors between 70-71</td>
                <td className="border border-gray-300 px-4 py-3">March 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Seniors between 65-69</td>
                <td className="border border-gray-300 px-4 py-3">May 2024</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">People with a disability tax credit certificate</td>
                <td className="border border-gray-300 px-4 py-3">June 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Children under 18</td>
                <td className="border border-gray-300 px-4 py-3">June 2024</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">All other eligible Canadian residents</td>
                <td className="border border-gray-300 px-4 py-3">2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Apply */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          How to apply
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-dental-primary" />
                For seniors (65 and older)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                You will receive a letter with instructions and an application code. Follow the letter's instructions to apply by phone.
              </p>
              <p className="text-gray-600">
                If you haven't received a letter but believe you're eligible, make sure the mailing address used for your 2022 tax return is up to date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-dental-primary" />
                For other eligible people
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Starting in May 2024, you will be able to apply online.
              </p>
              <p className="text-gray-600">
                Watch for CDCP updates for more information about the online application process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* After Application */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          After your application
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">
              After applying to CDCP, Health Canada will verify your eligibility and forward your information to Sun Life, which manages the plan's enrollment process.
            </p>
            <p className="text-gray-600">
              Within three months of your application, you will receive a welcome package from Sun Life including the start date of your coverage, your membership card, and information about CDCP.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-dental-primary text-white rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to apply?</h3>
          <p className="text-lg mb-6">
            Apply now to the Canadian Dental Care Plan
          </p>
          <a
            href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/apply.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            How to apply
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-gray-600 mb-6">
          For more information about covered services, visit the Government of Canada website.
        </p>
        
        <Link href="/en/contact">
          <Button variant="outline" size="lg">
            Contact us for more information
          </Button>
        </Link>
      </div>
    </div>
  );
}
