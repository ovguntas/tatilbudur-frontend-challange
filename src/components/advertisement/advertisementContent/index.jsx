import React from 'react'
import { AdvertisementContentWrapper } from './style'

function AdvertisementContent() {
    return (
        <div>
            <AdvertisementContentWrapper>
                <div className='contentRow'>
                    <div className="contentRowHeading">Daha Fazla Tatil, TatilBudur!</div>
                    <div className="contentRowText">1997 yılından bu yana binlerce kişiye otel,
                        tur, uçak ve organizasyon hizmetleri sunan markamız, her geçen gün daha da
                        büyüyerek hayalinizdeki tatili uygun fiyatlarla gerçeğe çevirme fırsatı sunuyor.
                    </div>
                </div>
                <div className='contentRow'>
                    <div className="contentRowHeading">En Uygun Tatil Fırsatları</div>
                    <div className="contentRowText">Tatilbudur.com ile unutulmaz bir tatil deneyimine
                        hazır mısınız? Hem yurt içinde hem de yurt dışında birbirinden farklı konaklama
                        seçenekleri ve zengin içerikli turlarıyla bütçenizi sarsmayacak tatil fırsatlarını
                        sizlerle buluşturan acentemiz, otel ve tur hizmetleriyle kaliteli hizmetin yeni
                        adresi olma yolunda ilerliyor.
                    </div>
                </div>

                <div className='contentRow'>
                    <div className="contentRowHeading">Tatil Fiyatları</div>
                    <div className="contentRowText gradientBackground">Tatilbudur.com'da birçok farklı ve değişik
                     uygun fiyatlı tatil önerileri sizler için bir araya geliyor. Yapacağınız tek şey hayal ettiğiniz
                      tatili seçmek. Yüzlerce farklı lokasyonda her zaman istediğiniz tatile uygun fiyat garantisiyle 
                      çıkabilir, seyahat planınızı sorunsuzca planlayabilirsiniz. Size en uygun tatil seçeneklerini inceleyerek
                     dilediğiniz tatile bir adım daha yaklaşabilirsiniz. 
                    </div>
                    <a href="#">Devamını Oku</a>
                </div>
                <div className='contentRow'>
                    <div className="contentRowHeading">Türkiye'de En Güzel Tatil Yerleri</div>
                    <div className="contentRowText gradientBackground">Tatilbudur.com' da birçok farklı ve değişik
                    uygun fiyatlı tatil önerileri sizler için bir araya geliyor. Yapacağınız tek şey hayal ettiğiniz tatili seçmek
                    Yüzlerce farklı lokasyonlarda her zaman istediğinişz tatile, uygun fiyat garantisi ile çıkabilir, seyehat planınızı
                    sorunsuzca oluşturabilirsiniz. Size en uygun tatil seçeneklerini                    
                    </div>
                    <a href="#">Devamını Oku</a>
                </div>
                <div className='contentRow'>
                    <div className="contentRowHeading">Dünyanın En Güzel Tatil Yerleri</div>
                    <div className="contentRowText gradientBackground">Tatilbudur.com ile unutulmaz bir tatil deneyimine
                        hazır mısınız? Hem yurt içinde hem de yurt dışında birbirinden farklı konaklama
                        seçenekleri ve zengin içerikli turlarıyla bütçenizi sarsmayacak tatil fırsatlarını
                        sizlerle buluşturan acentemiz, otel ve tur hizmetleriyle kaliteli hizmetin yeni
                        adresi olma yolunda ilerliyor.
                    </div>
                    <a href="#">Devamını Oku</a>
                </div>
            </AdvertisementContentWrapper>
        </div>
    )
}

export default AdvertisementContent