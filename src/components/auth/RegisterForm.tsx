
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/hooks/useLanguage';
import { toast } from '@/hooks/use-toast';

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    company: '',
    legalStatus: '',
    fieldOfActivity: '',
    role: '',
    companyWebsite: '',
    phone: '',
    taxId: '',
    eori: '',
    paymentMethod: '',
    specialInstructions: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate registration request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t('registrationSubmitted'),
        description: t('registrationPendingReview'),
      });
      onSuccess();
    } catch (error) {
      toast({
        title: t('registrationError'),
        description: t('registrationErrorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">{t('fullName')} *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">{t('email')} *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password">{t('password')} *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">{t('company')} *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="legalStatus">{t('legalStatus')}</Label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, legalStatus: value }))}>
            <SelectTrigger>
              <SelectValue placeholder={t('selectLegalStatus')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sa">SA</SelectItem>
              <SelectItem value="ltd">Ltd</SelectItem>
              <SelectItem value="gmbh">GmbH</SelectItem>
              <SelectItem value="llc">LLC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fieldOfActivity">{t('fieldOfActivity')}</Label>
          <Input
            id="fieldOfActivity"
            value={formData.fieldOfActivity}
            onChange={(e) => setFormData(prev => ({ ...prev, fieldOfActivity: e.target.value }))}
          />
        </div>
        
        <div>
          <Label htmlFor="role">{t('roleInCompany')}</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">{t('phone')}</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
        
        <div>
          <Label htmlFor="website">{t('companyWebsite')}</Label>
          <Input
            id="website"
            value={formData.companyWebsite}
            onChange={(e) => setFormData(prev => ({ ...prev, companyWebsite: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="taxId">{t('taxId')}</Label>
          <Input
            id="taxId"
            value={formData.taxId}
            onChange={(e) => setFormData(prev => ({ ...prev, taxId: e.target.value }))}
          />
        </div>
        
        <div>
          <Label htmlFor="eori">{t('eori')}</Label>
          <Input
            id="eori"
            value={formData.eori}
            onChange={(e) => setFormData(prev => ({ ...prev, eori: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="paymentMethod">{t('preferredPaymentMethod')}</Label>
        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}>
          <SelectTrigger>
            <SelectValue placeholder={t('selectPaymentMethod')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="creditCard">{t('creditCard')}</SelectItem>
            <SelectItem value="bankTransfer">{t('bankTransfer')}</SelectItem>
            <SelectItem value="terms">{t('paymentTerms')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="instructions">{t('specialInstructions')}</Label>
        <Textarea
          id="instructions"
          value={formData.specialInstructions}
          onChange={(e) => setFormData(prev => ({ ...prev, specialInstructions: e.target.value }))}
          rows={3}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading}
      >
        {isLoading ? t('submitting') : t('submitRegistration')}
      </Button>
    </form>
  );
};

export default RegisterForm;
