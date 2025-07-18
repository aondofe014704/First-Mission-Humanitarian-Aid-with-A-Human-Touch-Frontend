import { useState } from 'react';
import { X, User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useAuthStore } from './authStore';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'login' | 'register';
}

interface LoginForm {
    email: string;
    password: string;
}

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    phone_number: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
    const [mode, setMode] = useState<'login' | 'register'>(initialMode);
    const [showPassword, setShowPassword] = useState(false);
    const { login, register, isLoading, error, clearError } = useAuthStore();

    const loginForm = useForm<LoginForm>();
    const registerForm = useForm<RegisterForm>();

    const handleLogin = async (data: LoginForm) => {
        const success = await login(data.email, data.password);
        if (success) {
            onClose();
            loginForm.reset();
        }
    };

    const handleRegister = async (data: RegisterForm) => {
        const success = await register(data);
        if (success) {
            onClose();
            registerForm.reset();
        }
    };

    const switchMode = () => {
        setMode(mode === 'login' ? 'register' : 'login');
        clearError();
        loginForm.reset();
        registerForm.reset();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-blue-800">
                        {mode === 'login' ? 'Sign In' : 'Sign Up'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-6">
                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    {mode === 'login' ? (
                        <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="email"
                                        {...loginForm.register('email', { required: 'Email is required' })}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {loginForm.formState.errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        {...loginForm.register('password', { required: 'Password is required' })}
                                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {loginForm.formState.errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.password.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="text"
                                        {...registerForm.register('name', { required: 'Name is required' })}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {registerForm.formState.errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="email"
                                        {...registerForm.register('email', { required: 'Email is required' })}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {registerForm.formState.errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type="tel"
                                        {...registerForm.register('phone_number', { required: 'Phone number is required' })}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                {registerForm.formState.errors.phone_number && (
                                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.phone_number.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        {...registerForm.register('password', {
                                            required: 'Password is required',
                                            minLength: { value: 6, message: 'Password must be at least 6 characters' }
                                        })}
                                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                                {registerForm.formState.errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.password.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={switchMode}
                                className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                {mode === 'login' ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;