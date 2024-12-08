'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { InfoCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { authService } from '@/services/authService';

// Validação de esquema com Zod
const registerSchema = z.object({
  username: z.string()
    .min(3, { message: "Username deve ter pelo menos 3 caracteres" })
    .max(20, { message: "Username não pode ter mais de 20 caracteres" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username só pode conter letras, números e underscore" }),
  email: z.string()
    .email({ message: "Email inválido" }),
  password: z.string()
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" })
    .regex(/[A-Z]/, { message: "Senha deve conter pelo menos uma letra maiúscula" })
    .regex(/[a-z]/, { message: "Senha deve conter pelo menos uma letra minúscula" })
    .regex(/[0-9]/, { message: "Senha deve conter pelo menos um número" })
    .regex(/[!@#$%^&*()]/, { message: "Senha deve conter pelo menos um caractere especial" })
});

const RegisterPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  // Calcular força da senha
  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*()]/.test(password)) strength++;
    return (strength / 5) * 100;
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    setServerError(null);

    try {
      const result = await authService.register(values);
      
      if (result.success) {
        router.push('/auth/login');
      } else {
        setServerError(result.message || 'Erro ao registrar');
      }
    } catch (error) {
      setServerError('Erro de conexão. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Criar Conta</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Sua senha" 
                        {...field} 
                      />
                    </FormControl>
                    <Progress 
                      value={calculatePasswordStrength(field.value)} 
                      className="mt-2"
                    />
                    <FormDescription>
                      Sua senha deve conter:
                    </FormDescription>
                    <ul className="list-disc pl-5 text-xs">
                      <li>Mínimo de 8 caracteres</li>
                      <li>Letra maiúscula e minúscula</li>
                      <li>Número</li>
                      <li>Caractere especial</li>
                    </ul>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Server Error Alert */}
              {serverError && (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>{serverError}</AlertDescription>
                </Alert>
              )}

              <Separator />

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Registrando...' : 'Criar Conta'}
              </Button>

              <div className="text-center text-sm text-muted-foreground mt-4">
                Já tem uma conta? 
                <Button 
                  variant="link" 
                  onClick={() => router.push('/auth/login')}
                >
                  Fazer Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;