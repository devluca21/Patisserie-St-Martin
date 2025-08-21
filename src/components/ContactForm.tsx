'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './ui/Button';

const ContactForm = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  
  const contactSchema = z.object({
    name: z.string().min(2, isEnglish ? 'Name must contain at least 2 characters' : 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email(isEnglish ? 'Invalid email address' : 'Adresse email invalide'),
    phone: z.string().optional(),
    reason: z.string().min(5, isEnglish ? 'Please provide a reason for your visit' : 'Veuillez fournir un motif pour votre visite'),
    preferredTime: z.string().optional(),
    message: z.string().optional(),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', data);
      
      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError(isEnglish ? 'Error sending message' : 'Erreur lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {isEnglish ? 'Message sent successfully!' : 'Message envoyé avec succès!'}
        </h3>
        <p className="text-green-700 mb-6">
          {isEnglish 
            ? 'We will contact you as soon as possible to confirm your appointment.'
            : 'Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous.'
          }
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          {isEnglish ? 'Send another message' : 'Envoyer un autre message'}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm sm:text-base">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dental-dark mb-2">
            {isEnglish ? 'Full Name *' : 'Nom complet *'}
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-primary focus:border-transparent transition-colors text-base"
            placeholder={isEnglish ? 'Your full name' : 'Votre nom complet'}
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dental-dark mb-2">
            {isEnglish ? 'Email *' : 'Courriel *'}
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-primary focus:border-transparent transition-colors text-base"
            placeholder="votre@email.com"
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dental-dark mb-2">
            {isEnglish ? 'Phone' : 'Téléphone'}
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-primary focus:border-transparent transition-colors text-base"
            placeholder="(514) 722-6575"
            autoComplete="tel"
            inputMode="tel"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-dental-dark mb-2">
            {isEnglish ? 'Reason for visit *' : 'Motif de consultation *'}
          </label>
          <input
            {...register('reason')}
            type="text"
            id="reason"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-primary focus:border-transparent transition-colors text-base"
            placeholder={isEnglish ? 'Exam, cleaning, pain...' : 'Examen, nettoyage, douleur...'}
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-dental-dark mb-2">
            {isEnglish ? 'Preferred time' : 'Heure préférée'}
          </label>
          <select
            {...register('preferredTime')}
            id="preferredTime"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-primary focus:border-transparent transition-colors text-base"
          >
            <option value="">{isEnglish ? 'Select a time' : 'Sélectionnez une heure'}</option>
            <option value="morning">{isEnglish ? 'Morning (8am-12pm)' : 'Matin (8h-12h)'}</option>
            <option value="afternoon">{isEnglish ? 'Afternoon (1pm-5pm)' : 'Après-midi (13h-17h)'}</option>
            <option value="evening">{isEnglish ? 'Evening (5pm-8pm)' : 'Soirée (17h-20h)'}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dental-dark mb-2">
            {isEnglish ? 'Message' : 'Message'}
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={3}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-dental-primary focus:border-transparent transition-colors text-base resize-none"
            placeholder={isEnglish ? 'Additional information...' : 'Informations supplémentaires...'}
          />
        </div>
      </div>

      <div className="text-center pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 sm:px-8"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {isEnglish ? 'Sending...' : 'Envoi en cours...'}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              {isEnglish ? 'Send' : 'Envoyer'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
