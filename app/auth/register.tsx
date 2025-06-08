import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import { 
  Layout, 
  Text, 
  Input, 
  Button
} from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Target, Eye, EyeOff } from 'lucide-react-native';
import { Link, router } from 'expo-router';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmEntry, setSecureConfirmEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const { width, height } = useWindowDimensions();
  const isSmallPhone = width <= 375;
  const isMediumPhone = width > 375 && width <= 480;
  const isSmallTablet = width > 480 && width <= 767;
  const isTablet = width > 767 && width <= 1024;
  const isLargeTablet = width > 1024 && width <= 1366;
  const isDesktop = width > 1366;

  const handleRegister = async () => {
    setLoading(true);
    // TODO: Implement registration logic
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)');
    }, 1500);
  };

  const renderPasswordIcon = (props: any, isConfirm = false) => (
    <View style={styles.iconContainer}>
      {(isConfirm ? secureConfirmEntry : secureTextEntry) ? (
        <EyeOff 
          {...props} 
          size={20} 
          color="#8F9BB3" 
          onPress={() => isConfirm ? setSecureConfirmEntry(!secureConfirmEntry) : setSecureTextEntry(!secureTextEntry)}
        />
      ) : (
        <Eye 
          {...props} 
          size={20} 
          color="#8F9BB3"
          onPress={() => isConfirm ? setSecureConfirmEntry(!secureConfirmEntry) : setSecureTextEntry(!secureTextEntry)}
        />
      )}
    </View>
  );

  // Calculate responsive form width
  const getFormWidth = () => {
    if (isDesktop) return Math.min(420, width * 0.35);
    if (isLargeTablet) return Math.min(400, width * 0.5);
    if (isTablet) return Math.min(380, width * 0.65);
    if (isSmallTablet) return Math.min(360, width * 0.8);
    return width - 32; // Mobile: full width with padding
  };

  const getResponsiveDimensions = () => {
    if (isSmallPhone) {
      return {
        containerPadding: 16,
        formPadding: 24,
        logoSize: 45,
        logoContainer: 80,
        headerHeight: 160,
        fontSize: {
          header: 22,
          label: 14,
          input: 15,
          button: 16,
          link: 13
        },
        spacing: {
          small: 8,
          medium: 16,
          large: 24,
          xlarge: 32
        }
      };
    } else if (isMediumPhone) {
      return {
        containerPadding: 20,
        formPadding: 28,
        logoSize: 50,
        logoContainer: 85,
        headerHeight: 170,
        fontSize: {
          header: 24,
          label: 15,
          input: 16,
          button: 16,
          link: 14
        },
        spacing: {
          small: 10,
          medium: 18,
          large: 28,
          xlarge: 36
        }
      };
    } else if (isSmallTablet) {
      return {
        containerPadding: 24,
        formPadding: 32,
        logoSize: 55,
        logoContainer: 90,
        headerHeight: 180,
        fontSize: {
          header: 26,
          label: 16,
          input: 16,
          button: 17,
          link: 14
        },
        spacing: {
          small: 12,
          medium: 20,
          large: 32,
          xlarge: 40
        }
      };
    } else if (isTablet) {
      return {
        containerPadding: 32,
        formPadding: 36,
        logoSize: 60,
        logoContainer: 95,
        headerHeight: 190,
        fontSize: {
          header: 28,
          label: 17,
          input: 17,
          button: 18,
          link: 15
        },
        spacing: {
          small: 14,
          medium: 24,
          large: 36,
          xlarge: 44
        }
      };
    } else if (isLargeTablet) {
      return {
        containerPadding: 40,
        formPadding: 40,
        logoSize: 65,
        logoContainer: 100,
        headerHeight: 200,
        fontSize: {
          header: 30,
          label: 18,
          input: 18,
          button: 19,
          link: 16
        },
        spacing: {
          small: 16,
          medium: 28,
          large: 40,
          xlarge: 48
        }
      };
    } else {
      return {
        containerPadding: 48,
        formPadding: 44,
        logoSize: 70,
        logoContainer: 105,
        headerHeight: 210,
        fontSize: {
          header: 32,
          label: 19,
          input: 19,
          button: 20,
          link: 17
        },
        spacing: {
          small: 18,
          medium: 32,
          large: 44,
          xlarge: 52
        }
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
    },
    contentWrapper: {
      width: getFormWidth(),
      maxWidth: 420,
    },
    header: {
      height: dimensions.headerHeight,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: dimensions.spacing.large,
      position: 'relative',
    },
    headerTitle: {
      fontSize: dimensions.fontSize.header,
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    logoContainer: {
      position: 'absolute',
      bottom: -dimensions.logoContainer / 2,
      alignSelf: 'center',
      zIndex: 10,
    },
    logoWrapper: {
      width: dimensions.logoContainer,
      height: dimensions.logoContainer,
      borderRadius: dimensions.logoContainer / 2,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
    },
    formContainer: {
      backgroundColor: 'transparent',
      marginTop: dimensions.logoContainer / 2 + dimensions.spacing.medium,
    },
    form: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: dimensions.formPadding,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 6,
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
      marginBottom: dimensions.spacing.small,
      borderRadius: 8,
      minHeight: isSmallPhone ? 44 : 48,
    },
    inputText: {
      fontSize: dimensions.fontSize.input,
    },
    registerButton: {
      backgroundColor: '#6366F1',
      borderColor: '#6366F1',
      borderRadius: 8,
      paddingVertical: isSmallPhone ? 14 : 16,
      marginTop: dimensions.spacing.large,
      marginBottom: dimensions.spacing.large,
      minHeight: isSmallPhone ? 44 : 48,
    },
    registerButtonText: {
      fontSize: dimensions.fontSize.button,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    loginContainer: {
      flexDirection: isSmallPhone ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isSmallPhone ? 4 : 0,
    },
    loginText: {
      fontSize: dimensions.fontSize.link,
      color: '#8F9BB3',
      textAlign: 'center',
    },
    loginLink: {
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
            {/* Header with gradient and logo */}
            <LinearGradient
              colors={['#6366F1', '#8B5CF6']}
              style={responsiveStyles.header}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={responsiveStyles.headerTitle}>Daftar MyArchery.id</Text>
              
              {/* Logo positioned at bottom of header */}
              <View style={responsiveStyles.logoContainer}>
                <View style={responsiveStyles.logoWrapper}>
                  <Target size={dimensions.logoSize} color="#6366F1" strokeWidth={2} />
                </View>
              </View>
            </LinearGradient>

            {/* Registration Form */}
            <Layout style={responsiveStyles.formContainer}>
              <View style={responsiveStyles.form}>
                <Text style={[responsiveStyles.inputLabel, responsiveStyles.firstInputLabel]}>Full Name</Text>
                <Input
                  placeholder="Enter your full name"
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                  style={responsiveStyles.input}
                  textStyle={responsiveStyles.inputText}
                  size="large"
                />

                <Text style={responsiveStyles.inputLabel}>Email</Text>
                <Input
                  placeholder="Enter email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  style={responsiveStyles.input}
                  textStyle={responsiveStyles.inputText}
                  size="large"
                />

                <Text style={responsiveStyles.inputLabel}>Password</Text>
                <Input
                  placeholder="Enter Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={secureTextEntry}
                  accessoryRight={(props) => renderPasswordIcon(props, false)}
                  style={responsiveStyles.input}
                  textStyle={responsiveStyles.inputText}
                  size="large"
                />

                <Text style={responsiveStyles.inputLabel}>Confirm Password</Text>
                <Input
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={secureConfirmEntry}
                  accessoryRight={(props) => renderPasswordIcon(props, true)}
                  style={responsiveStyles.input}
                  textStyle={responsiveStyles.inputText}
                  size="large"
                />

                <Button
                  style={responsiveStyles.registerButton}
                  size="large"
                  onPress={handleRegister}
                  disabled={loading}
                >
                  {evaProps => (
                    <Text {...evaProps} style={responsiveStyles.registerButtonText}>
                      {loading ? 'Mendaftar...' : 'Daftar'}
                    </Text>
                  )}
                </Button>

                <View style={responsiveStyles.loginContainer}>
                  <Text style={responsiveStyles.loginText}>
                    Already have an account?{isSmallPhone ? '\n' : ' '}
                  </Text>
                  <Link href="/auth/login" asChild>
                    <Text style={responsiveStyles.loginLink}>Login now</Text>
                  </Link>
                </View>
              </View>
            </Layout>
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