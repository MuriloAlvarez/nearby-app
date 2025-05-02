import { Button } from '@/shared/components/button/button';
import { colors } from '@/shared/styles/colors';
import { IconArrowLeft, IconMapPin, IconPhone, IconScan, IconTicket, IconToolsKitchen2 } from '@tabler/icons-react-native';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { s } from './market-details-style';
import useMarketDetails from './useMarket-details.hook';
import { categoriesIcons } from '@/shared/utils/categories-icons';
import Loading from '@/shared/components/loading';

export default function MarketDetailsPage() {
  const {
    methods: { back },
    state: { detailsMarket, isLoadingMarkets },
  } = useMarketDetails();

  if (!detailsMarket) {
    return null;
  }
  const Icon = categoriesIcons[detailsMarket.categoryId];

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={s.buttonBack} onPress={() => back()}>
        <IconArrowLeft color={colors.gray[100]} size={18} />
      </TouchableOpacity>
      <Image source={{ uri: detailsMarket?.cover }} style={s.image} />
      <View style={s.container}>
        <View style={s.content}>
          <View style={s.information}>
            <View style={s.header}>
              <Text style={s.title}>{detailsMarket?.name}</Text>

              <Icon size={24} color={colors.green.base} />
            </View>

            <Text style={s.description}>{detailsMarket?.description}</Text>

            <View style={s.couponsAvailable}>
              <IconTicket color={colors.red.base} size={24} />
              <Text style={s.numerCoupon}>{detailsMarket?.coupons}</Text>
              <Text style={s.titleCoupon}>cupons disponíveis</Text>
            </View>
          </View>

          <ScrollView>
            <View style={s.details}>
              <View>
                <Text style={s.titleDetails}>Regulamento</Text>
                {isLoadingMarkets ? (
                  <Loading />
                ) : (
                  <View style={s.details}>
                    {detailsMarket.rules.map((item) => (
                      <Text key={item.id} style={s.descriptionDetails}>{`\u2022 ${item.description}`}</Text>
                    ))}
                  </View>
                )}
              </View>

              <View style={s.separator} />

              <View>
                <Text style={s.titleDetails}>Informações</Text>
                {isLoadingMarkets ? (
                  <Loading />
                ) : (
                  <View style={s.details}>
                    <View style={s.contentDetails}>
                      <IconMapPin size={18} color={colors.gray[500]} />
                      <Text style={s.descriptionDetails}>{detailsMarket.address}</Text>
                    </View>
                    <View style={s.contentDetails}>
                      <IconPhone size={18} color={colors.gray[500]} />
                      <Text style={s.descriptionDetails}>{detailsMarket.phone}</Text>
                    </View>
                  </View>
                )}
              </View>

              <View style={s.separator} />

              <View>
                <Text style={s.titleDetails}>Cupons Usados</Text>
                {isLoadingMarkets ? (
                  <Loading />
                ) : (
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
                )}
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
