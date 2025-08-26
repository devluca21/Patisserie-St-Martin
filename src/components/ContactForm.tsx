'use client';

import { useState, useCallback, memo } from 'react';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import { useTranslations } from '@/lib/useTranslations';

const ContactForm = memo(() => {
  const { t, isEnglish } = useTranslations();
  
  const contactSchema = z.object({
    name: z.string().min(2, t('contactForm.nameError')),
    email: z.string().email(t('contactForm.emailError')),
    phone: z.string().optional(),
    orderType: z.string().min(5, t('contactForm.orderTypeError')),
    preferredDate: z.string().optional(),
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

  const onSubmit = useCallback(async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Send to Brevo API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          listId: 12, // Brevo list ID
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError(t('contactForm.sendError'));
    } finally {
      setIsSubmitting(false);
    }
  }, [reset, setError, t]);

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center">
        <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
          {t('contactForm.messageSent')}
        </h3>
        <p className="text-green-700 mb-4 sm:mb-6 text-sm sm:text-base">
          {t('contactForm.messageSentDesc')}
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          {t('contactForm.sendAnother')}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 md:space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
          <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-xs sm:text-sm md:text-base">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-patisserie-dark mb-1 sm:mb-2">
            {t('contactForm.fullName')}
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-patisserie-primary focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder={t('contactForm.fullNamePlaceholder')}
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-patisserie-dark mb-1 sm:mb-2">
            {t('contactForm.email')}
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-patisserie-primary focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder={t('contactForm.emailPlaceholder')}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-patisserie-dark mb-1 sm:mb-2">
            {t('contactForm.phone')}
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-patisserie-primary focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder={t('contactForm.phonePlaceholder')}
            autoComplete="tel"
            inputMode="tel"
          />
        </div>

        <div>
          <label htmlFor="orderType" className="block text-xs sm:text-sm font-medium text-patisserie-dark mb-1 sm:mb-2">
            {t('contactForm.orderType')}
          </label>
          <input
            {...register('orderType')}
            type="text"
            id="orderType"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-patisserie-primary focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder={t('contactForm.orderTypePlaceholder')}
          />
          {errors.orderType && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.orderType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-patisserie-dark mb-1 sm:mb-2">
          {t('contactForm.message')}
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={3}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-patisserie-primary focus:border-transparent transition-colors text-sm sm:text-base resize-none"
          placeholder={t('contactForm.messagePlaceholder')}
        />
      </div>

      <div className="text-center pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
              {t('contactForm.sending')}
            </>
          ) : (
            <>
              <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              {t('contactForm.send')}
            </>
          )}
        </Button>
      </div>
    </form>
  );
});

export default ContactForm;
