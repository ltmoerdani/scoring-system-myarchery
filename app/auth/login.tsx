import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import { 
  Layout, 
  Text, 
  Input, 
  Button, 
  CheckBox,
  TextProps
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Eye, EyeOff, Target, Mail } from 'lucide-react-native';
import { Link, router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const { width, height } = useWindowDimensions();
  const isSmallPhone = width <= 375;
  const isMediumPhone = width > 375 && width <= 480;
  const isSmallTablet = width > 480 && width <= 767;
  const isTablet = width > 767 && width <= 1024;
  const isLargeTablet = width > 1024 && width <= 1366;
  const isDesktop = width > 1366;

  const handleLogin = async () => {
    setLoading(true);
    // TODO: Implement login logic
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderPasswordIcon = (props: any) => (
    <View style={styles.iconContainer}>
      {secureTextEntry ? (
        <EyeOff {...props} size={20} color="#8F9BB3" onPress={toggleSecureEntry} />
      ) : (
        <Eye {...props} size={20} color="#8F9BB3" onPress={toggleSecureEntry} />
      )}
    </View>
  );

  const renderEmailIcon = (props: any) => (
    <View style={styles.iconContainer}>
      <Mail {...props} size={20} color="#8F9BB3" />
    </View>
  );

  // Calculate responsive dimensions
  const getResponsiveDimensions = () => {
    if (isSmallPhone) {
      return {
        containerPadding: 16,
        cardPadding: 24,
        logoSize: 50,
        maxWidth: width - 32,
        fontSize: {
          header: 24,
          subtitle: 14,
          label: 14,
          input: 16,
          button: 16,
          link: 14
        },
        spacing: {
          small: 8,
          medium: 16,
          large: 24,
          xlarge: 32
        },
        inputHeight: 48,
        buttonHeight: 48,
        borderRadius: 8,
        showSubtitle: false,
        useCard: false
      };
    } else if (isMediumPhone) {
      return {
        containerPadding: 20,
        cardPadding: 32,
        logoSize: 60,
        maxWidth: width - 40,
        fontSize: {
          header: 28,
          subtitle: 16,
          label: 15,
          input: 16,
          button: 16,
          link: 14
        },
        spacing: {
          small: 10,
          medium: 20,
          large: 28,
          xlarge: 36
        },
        inputHeight: 52,
        buttonHeight: 52,
        borderRadius: 8,
        showSubtitle: true,
        useCard: false
      };
    } else if (isSmallTablet) {
      return {
        containerPadding: 32,
        cardPadding: 40,
        logoSize: 80,
        maxWidth: 400,
        fontSize: {
          header: 32,
          subtitle: 18,
          label: 16,
          input: 18,
          button: 18,
          link: 16
        },
        spacing: {
          small: 12,
          medium: 24,
          large: 32,
          xlarge: 40
        },
        inputHeight: 56,
        buttonHeight: 56,
        borderRadius: 8,
        showSubtitle: true,
        useCard: true
      };
    } else if (isTablet) {
      return {
        containerPadding: 48,
        cardPadding: 48,
        logoSize: 100,
        maxWidth: 500,
        fontSize: {
          header: 32,
          subtitle: 18,
          label: 18,
          input: 18,
          button: 18,
          link: 16
        },
        spacing: {
          small: 14,
          medium: 28,
          large: 36,
          xlarge: 44
        },
        inputHeight: 60,
        buttonHeight: 60,
        borderRadius: 8,
        showSubtitle: true,
        useCard: true
      };
    } else if (isLargeTablet) {
      return {
        containerPadding: 64,
        cardPadding: 64,
        logoSize: 120,
        maxWidth: 600,
        fontSize: {
          header: 32,
          subtitle: 18,
          label: 18,
          input: 18,
          button: 18,
          link: 16
        },
        spacing: {
          small: 16,
          medium: 32,
          large: 40,
          xlarge: 48
        },
        inputHeight: 64,
        buttonHeight: 64,
        borderRadius: 8,
        showSubtitle: true,
        useCard: true
      };
    } else {
      return {
        containerPadding: 80,
        cardPadding: 80,
        logoSize: 140,
        maxWidth: 650,
        fontSize: {
          header: 32,
          subtitle: 18,
          label: 18,
          input: 18,
          button: 18,
          link: 16
        },
        spacing: {
          small: 18,
          medium: 36,
          large: 44,
          xlarge: 52
        },
        inputHeight: 64,
        buttonHeight: 64,
        borderRadius: 8,
        showSubtitle: true,
        useCard: true
      };
    }
  };

  const dimensions = getResponsiveDimensions();

  const responsiveStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F9FC',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: dimensions.spacing.large,
      paddingHorizontal: dimensions.containerPadding,
    },
    contentWrapper: {
      width: '100%',
      maxWidth: dimensions.maxWidth,
      alignItems: 'center',
    },
    logoContainer: {
      marginBottom: dimensions.spacing.large,
      alignItems: 'center',
    },
    logoWrapper: {
      width: dimensions.logoSize + 20,
      height: dimensions.logoSize + 20,
      borderRadius: (dimensions.logoSize + 20) / 2,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
      marginBottom: dimensions.spacing.medium,
    },
    welcomeText: {
      fontSize: dimensions.fontSize.header,
      fontWeight: '700',
      color: '#222B45',
      textAlign: 'center',
      marginBottom: dimensions.spacing.small,
    },
    subtitleText: {
      fontSize: dimensions.fontSize.subtitle,
      color: '#8F9BB3',
      textAlign: 'center',
      lineHeight: dimensions.fontSize.subtitle * 1.4,
      display: dimensions.showSubtitle ? 'flex' : 'none',
    },
    formCard: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: dimensions.cardPadding,
      ...(dimensions.useCard && {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: isTablet ? 0.15 : 0.1,
        shadowRadius: 12,
        elevation: 8,
      }),
    },
    inputLabel: {
      fontSize: dimensions.fontSize.label,
      fontWeight: '600',
      color: '#222B45',
      marginBottom: dimensions.spacing.small,
      marginTop: dimensions.spacing.medium,
    },
    firstInputLabel: {
      marginTop: 0,
    },
    input: {
      height: dimensions.inputHeight,
      borderRadius: dimensions.borderRadius,
      marginBottom: dimensions.spacing.small,
    },
    inputText: {
      fontSize: dimensions.fontSize.input,
    },
    optionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: dimensions.spacing.medium,
      marginBottom: dimensions.spacing.large,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkboxText: {
      fontSize: dimensions.fontSize.link,
      color: '#8F9BB3',
      marginLeft: dimensions.spacing.small,
    },
    forgotPasswordText: {
      fontSize: dimensions.fontSize.link,
      color: '#6366F1',
      fontWeight: '600',
    },
    loginButton: {
      backgroundColor: '#6366F1',
      borderColor: '#6366F1',
      borderRadius: dimensions.borderRadius,
      height: dimensions.buttonHeight,
      marginBottom: dimensions.spacing.large,
      width: isDesktop ? '60%' : isLargeTablet ? '70%' : isTablet ? '80%' : '100%',
      alignSelf: 'center',
    },
    loginButtonText: {
      fontSize: dimensions.fontSize.button,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    signupContainer: {
      flexDirection: isSmallPhone ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isSmallPhone ? 4 : 8,
    },
    signupText: {
      fontSize: dimensions.fontSize.link,
      color: '#8F9BB3',
      textAlign: 'center',
    },
    signupLink: {
      fontSize: dimensions.fontSize.link,
      color: '#6366F1',
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={responsiveStyles.container}>
      <KeyboardAvoidingView
        style={responsiveStyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={responsiveStyles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={responsiveStyles.contentWrapper}>
            {/* Logo and Welcome Section */}
            <View style={responsiveStyles.logoContainer}>
              <View style={responsiveStyles.logoWrapper}>
                <Target size={dimensions.logoSize} color="#6366F1" strokeWidth={2} />
              </View>
              
              <Text style={responsiveStyles.welcomeText}>
                Selamat Datang
              </Text>
              
              {dimensions.showSubtitle && (
                <Text style={responsiveStyles.subtitleText}>
                  Silakan Masuk Ke{'\n'}Akun Anda
                </Text>
              )}
            </View>

            {/* Login Form */}
            <View style={responsiveStyles.formCard}>
              <Text style={[responsiveStyles.inputLabel, responsiveStyles.firstInputLabel]}>
                Email
              </Text>
              <Input
                placeholder="Masukkan email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                style={responsiveStyles.input}
                textStyle={responsiveStyles.inputText}
                size="large"
                accessoryRight={renderEmailIcon}
              />

              <Text style={responsiveStyles.inputLabel}>
                Password
              </Text>
              <Input
                placeholder="Masukkan password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                accessoryRight={renderPasswordIcon}
                style={responsiveStyles.input}
                textStyle={responsiveStyles.inputText}
                size="large"
              />

              <View style={responsiveStyles.optionsContainer}>
                <View style={responsiveStyles.checkboxContainer}>
                  <CheckBox
                    checked={rememberMe}
                    onChange={setRememberMe}
                    status="control"
                  >
                    {(evaProps: TextProps) => (
                      <Text {...evaProps} style={responsiveStyles.checkboxText}>
                        Ingat saya
                      </Text>
                    )}
                  </CheckBox>
                </View>
                
                <Text
                  style={responsiveStyles.forgotPasswordText}
                  onPress={() => router.push('/auth/forgot-password')}
                >
                  Lupa Password?
                </Text>
              </View>

              <Button
                style={responsiveStyles.loginButton}
                size="large"
                onPress={handleLogin}
                disabled={loading}
              >
                {(evaProps: TextProps) => (
                  <Text {...evaProps} style={responsiveStyles.loginButtonText}>
                    {loading ? 'Masuk...' : 'MASUK'}
                  </Text>
                )}
              </Button>

              <View style={responsiveStyles.signupContainer}>
                <Text style={responsiveStyles.signupText}>
                  Belum punya akun?{isSmallPhone ? '\n' : ' '}
                </Text>
                <Link href="/auth/register" asChild>
                  <Text style={responsiveStyles.signupLink}>Daftar Disini</Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});