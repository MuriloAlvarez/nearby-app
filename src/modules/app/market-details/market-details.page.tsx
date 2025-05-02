import { Button } from '@/shared/components/button/button';
import { colors } from '@/shared/styles/colors';
import { IconArrowLeft, IconMapPin, IconPhone, IconScan, IconTicket, IconToolsKitchen2 } from '@tabler/icons-react-native';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { s } from './market-details-style';

export default function MarketDetailsPage() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={s.buttonBack}>
        <IconArrowLeft color={colors.gray[100]} size={18} />
      </TouchableOpacity>
      <Image source={{}} style={s.image} />
      <View style={s.container}>
        <View style={s.content}>
          <View style={s.information}>
            <View style={s.header}>
              <Text style={s.title}>Titulo</Text>
              <IconToolsKitchen2 size={24} color={colors.green.base} />
            </View>

            <Text style={s.description}>Descricão Descrição Descrição Descricão Descrição Descricão Descrição Descricão</Text>

            <View style={s.couponsAvailable}>
              <IconTicket color={colors.red.base} size={24} />
              <Text style={s.numerCoupon}>2</Text>
              <Text style={s.titleCoupon}>cupons disponíveis</Text>
            </View>
          </View>

          <ScrollView>
            <View style={s.details}>
              <View>
                <Text style={s.titleDetails}>Regulamento</Text>
                <View style={s.details}>
                  <Text style={s.descriptionDetails}>Regra 1</Text>
                  <Text style={s.descriptionDetails}>Regra 1</Text>
                </View>
              </View>

              <View style={s.separator} />

              <View>
                <Text style={s.titleDetails}>Informações</Text>
                <View style={s.details}>
                  <View style={s.contentDetails}>
                    <IconMapPin size={18} color={colors.gray[500]} />
                    <Text style={s.descriptionDetails}>Localização</Text>
                  </View>
                  <View style={s.contentDetails}>
                    <IconPhone size={18} color={colors.gray[500]} />
                    <Text style={s.descriptionDetails}>Telefone</Text>
                  </View>
                </View>
              </View>

              <View style={s.separator} />

              <View>
                <Text style={s.titleDetails}>Cupons Usados</Text>
                <View style={s.details}>
                  <View style={s.contentDetails}>
                    <IconTicket size={18} color={colors.green.base} />
                    <Text style={s.descriptionDetails}>Telefone</Text>
                  </View>
                  <View style={s.contentDetails}>
                    <IconTicket size={18} color={colors.green.base} />
                    <Text style={s.descriptionDetails}>Telefone</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={s.action}>
          <View style={s.actionMap}>
            <Button>
              <IconMapPin color={colors.gray[100]} />
            </Button>
          </View>
          <View style={s.actionQRCode}>
            <Button>
              <IconScan color={colors.gray[100]} />
              <Text style={s.textQRCode}>Ler QR Code</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
