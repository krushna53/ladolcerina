import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"

const Favorites = () => {
  return (
    <Layout>
      <StyledFavorites>
        <SEO title="About" />
        <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
          <HeaderLogo />
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto" }}>
          <h1>Essential Tools</h1>
          <h3>Knives</h3>
          <div className="tool-container">
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Wusthof-Classic-8-Inch-4582-20/dp/B00009ZK08/ref=sr_1_1?dchild=1&keywords=wusthof+8inch+chefs+knife&qid=1591908153&s=home-garden&sr=1-1">
                  WÜSTHOF Classic 8 Inch Chef’s Knife,Black,8-Inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Victorinox-Cutlery-Straight-Paring-3-25-Inch/dp/B0019WXPQY/ref=sr_1_5?dchild=1&keywords=pairing+knife&qid=1591908264&s=home-garden&sr=1-5">
                  Victorinox Swiss Army Cutlery Straight Paring Knife, 3.25-Inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Professional-Carbon-Steel-Knife-Sharpening/dp/B074H8DLKK/ref=sr_1_4?crid=16ACETLLTFBH2&dchild=1&keywords=sharpening%2Bsteel&qid=1591995219&s=home-garden&sprefix=sharpening%2B%2Cgarden%2C449&sr=1-4&th=1">
                  10 inch Sharpening Steel, Professional Carbon Steel Knife
                  Sharpener
                </a>
              </p>
            </div>
          </div>
          <h3>Cookware</h3>
          <div className="tool-container">
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-MCP-12N-Multiclad-Stainless-12-Piece/dp/B009JXPS6U/ref=redir_mobile_desktop?ie=UTF8&aaxitk=w8xl6i203eSKpCUx8eE95g&hsa_cr_id=1043377570501&ref_=sbx_be_s_sparkle_mcd_asin_1">
                  Cuisinart MCP-12N Multiclad Pro Stainless Steel 12-Piece
                  Cookware Set
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.williams-sonoma.com/products/all-clad-tk-7-piece-fry-pan-and-sauce-pan-set/?pkey=call-clad-tk&isx=0.0.983">
                  All-Clad TK™ 7-Piece Integrity Cookware Set
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/All-Clad-Copper-Dishwasher-Cookware-14-Piece/dp/B000MWC02C/ref=sr_1_8?dchild=1&keywords=all+clad+d-5&qid=1591909374&s=home-garden&sr=1-8">
                  All-Clad 60090 Copper Core 5-Ply Bonded Dishwasher Safe
                  Cookware Set, 14-Piece, Silver
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-8922-20-Professional-Stainless-Skillet/dp/B00NAU8VTO/ref=sr_1_6?dchild=1&keywords=8-inch+saute+pan&qid=1591909910&s=home-garden&sr=1-6">
                  Cuisinart Professional Stainless Skillet, 8-Inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-722-24-Classic-Stainless-10-Inch/dp/B00008CM6F/ref=sr_1_3?dchild=1&keywords=10-inch+saute+pan&qid=1591910316&s=home-garden&sr=1-3">
                  Cuisinart 722-24 Chef's Classic Stainless 10-Inch Open Skillet
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-MCP19-18N-MultiClad-Stainless-Saucepan/dp/B009P483I8/ref=sr_1_2?dchild=1&keywords=2+quart+sauce+pot&qid=1591910360&s=home-garden&sr=1-2">
                  Cuisinart MultiClad Pro Stainless Steel 2-Quart Saucepan with
                  Cover
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a
                  href="https://www.amazon.com/Cuisinart-MCP194-20N-MultiClad-Stainless-Saucepan/dp/B009W28NLK/ref=sr_1_11?dchild=1&keywords=4+quart+sauce+pot&qid=1591910415&s=home-garden&s
r=1-11
"
                >
                  Cuisinart MCP194-20N MultiClad Pro Stainless Steel 4-Quart
                  Saucepan with Cover
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-733-30H-Classic-Stainless-2-Quart/dp/B00008CM6B/ref=sr_1_2?dchild=1&keywords=saute+pan&qid=1591911476&s=home-garden&sr=1-2">
                  Cuisinart 733-30H Chef's Classic Stainless 5-1/2-Quart Saute
                  Pan with Helper Handle and Cover, Silver
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-766-24-Classic-8-Quart-Stockpot/dp/B00008CM6J/ref=sr_1_4?dchild=1&keywords=8+quart+stock+pot&qid=1591910474&s=home-garden&sr=1-4">
                  Cuisinart 766-24 Chef's Classic 8-Quart Stockpot with Cover,
                  silver
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-77-412-Classic-Stainless-12-Quart/dp/B0000UV01S/ref=sr_1_3?dchild=1&keywords=pasta+pot&qid=1591995741&s=home-garden&sr=1-3">
                  Cuisinart 77-412 Chef's Classic Stainless 4-Piece 12-Quart
                  Pasta/Steamer Set,Stainless Steel
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/GreenPan-CC002675-001-Midnight-Ceramic-Frying/dp/B07Y45Z8P7/ref=sr_1_18?dchild=1&keywords=nonstick+frying+pan&qid=1591911684&s=home-garden&sr=1-18">
                  GreenPan Prime Midnight Healthy Ceramic Nonstick, Frying Pan
                  Set, 8" and 10", Black
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/GreenPan-CC002671-001-Midnight-Ceramic-Frying/dp/B07Y465794/ref=pd_bxgy_2/131-3077300-5639411?_encoding=UTF8&pd_rd_i=B07Y465794&pd_rd_r=b95e3cd0-a7b8-4ddc-aee7-b5118d02aac3&pd_rd_w=1MsmK&pd_rd_wg=utLd4&pf_rd_p=4e3f7fc3-00c8-46a6-a4db-8457e6319578&pf_rd_r=X77ND0YDEPQKEBD5YVRP&psc=1&refRID=X77ND0YDEPQKEBD5YVRP">
                  GreenPan Prime Midnight Healthy Ceramic Nonstick, Frying Pan
                  Set, 8" and 10", Black
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-7117-16UR-Classic-Stainless-Rectangular/dp/B003YLJZ6M/ref=sr_1_3?crid=1UBWFU4WVTHEE&dchild=1&keywords=roasting+pan+with+rack&qid=1591916882&s=home-garden&sprefix=roas%2Cgarden%2C504&sr=1-3">
                  GreenPan Prime Midnight Healthy Ceramic Nonstick, Saucepan
                  3QT, Black
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Lodge-Seasoned-Cast-Iron-Skillet/dp/B00006JSUB/ref=sr_1_1?dchild=1&keywords=Lodge+Seasoned+Cast+Iron+Skillet+-+12+Inch+Ergonomic+Frying+Pan+with+Assist+Handle&qid=1591917174&s=home-garden&sr=1-1">
                  Lodge Seasoned Cast Iron Skillet - 12 Inch Ergonomic Frying
                  Pan with Assist Handle
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/USA-Pan-Bakeware-Resistant-Aluminized/dp/B076736W8H/ref=sxin_7?ascsubtag=amzn1.osa.460ec0c1-39fc-48c0-a6f4-126855d3ec5e.ATVPDKIKX0DER.en_US&creativeASIN=B00282JL7G&cv_ct_cx=half%2Bsheet%2Bpans&cv_ct_id=amzn1.osa.460ec0c1-39fc-48c0-a6f4-126855d3ec5e.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=half%2Bsheet%2Bpans&linkCode=oas&pd_rd_i=B00282JL7G&pd_rd_r=22b5db60-4ca8-40bb-bdd1-dc991718093e&pd_rd_w=I6RDo&pd_rd_wg=sqvXd&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=FWX1S5NAJ1FCXWTM1PMS&qid=1591917216&s=home-garden&sr=1-3-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=scrippsonsite-20&th=1">
                  USA Pan Bakeware Half Sheet Pan, Set of 2, Aluminized Steel
                </a>
              </p>
            </div>
          </div>
          <h3>Accessories</h3>
          <div className="tool-container">
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Premium-Stainless-Steel-Mixing-Brushed/dp/B01HTYH8YA/ref=sxin_7_ac_d_pm?ac_md=2-1-QmV0d2VlbiAkMjUgYW5kICQ0MA%3D%3D-ac_d_pm&cv_ct_cx=mixing+bowls&dchild=1&keywords=mixing+bowls&pd_rd_i=B01HTYH8YA&pd_rd_r=9d2da025-eb26-4a9e-8300-7809def865db&pd_rd_w=BDbir&pd_rd_wg=MgQFg&pf_rd_p=56b8ab64-8f22-43d4-8319-4b30f162b5e2&pf_rd_r=7GDFC9D4Q9PFKN7CKQ0F&psc=1&qid=1591917380&s=home-garden&sr=1-2-22d05c05-1231-4126-b7c4-3e7a9c0027d0">
                  Premium Stainless Steel Mixing Brushed
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/ME-FAN-Silicone-Multi-Use-Intricately-Carved/dp/B073LLSLTH/ref=sr_1_2?dchild=1&keywords=trivets&qid=1591917530&s=home-garden&sr=1-2&th=1">
                  ME FAN Silicone Multi Use Intricately Carved
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Instant-Read-Meat-Thermometer-Calibration/dp/B073KYTWGB/ref=sr_1_5?dchild=1&keywords=waterproof+thermometer&qid=1592248747&sr=8-5">
                  Instant Read Meat Thermometer Calibration
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/ThermoPro-Digital-Thermometer-Grilling-Backlight/dp/B07MF18JHT/ref=dp_ob_title_kitchen">
                  ThermoPro Digital Thermometer Grilling Backlight
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Balanza-digital-capacidad-aumento-alimentos/dp/B0007GAWRS/ref=sxin_9?ascsubtag=amzn1.osa.0275d83a-5be5-4e52-86ac-5e3d49b28772.ATVPDKIKX0DER.en_US&creativeASIN=B0007GAWRS&crid=QK3G9A5L5Y5W&cv_ct_cx=digital+food+scale+grams+and+ounces&cv_ct_id=amzn1.osa.0275d83a-5be5-4e52-86ac-5e3d49b28772.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=digital+food+scale+grams+and+ounces&linkCode=oas&pd_rd_i=B0007GAWRS&pd_rd_r=ed681546-18f3-4b82-9dc7-a657fc956120&pd_rd_w=Qs0dh&pd_rd_wg=KJEwD&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=WNKFN5Y5TXXD49DZRFK8&qid=1591917661&s=home-garden&sprefix=digital+food+scale%2Cgarden%2C261&sr=1-1-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=thewire06oa-20">
                  Balanza digital capacidad aumento alimentos
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/John-Boos-RA03-Reversible-Cutting/dp/B00063QBDQ/ref=sr_1_1?dchild=1&keywords=John+Boos+Block+RA03+Maple+Wood+Edge+Grain+Reversible+Cutting+Board%2C+24+Inches+x+18+Inches+x+2.25+Inches&qid=1591918646&s=home-garden&sr=1-1">
                  John Boos RA03 Reversible Cutting
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-Grips-Carving-Cutting-Board/dp/B0835WTPX4/ref=sr_1_2?dchild=1&keywords=large+plastic+cutting+board&qid=1592248606&sr=8-2">
                  OXO Grips Carving Cutting Board
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Premium-Stainless-Salt-Pepper-Grinder/dp/B01N1PSWSB/ref=sxin_9_ac_d_pm?ac_md=1-0-VW5kZXIgJDI1-ac_d_pm&cv_ct_cx=salt+and+pepper+grinders&dchild=1&keywords=salt+and+pepper+grinders&pd_rd_i=B01N1PSWSB&pd_rd_r=ba9f1ce1-5d1b-4f88-b432-f897c87471cc&pd_rd_w=lOIlU&pd_rd_wg=PY83H&pf_rd_p=56b8ab64-8f22-43d4-8319-4b30f162b5e2&pf_rd_r=NDKFGAGFQRT3QMTYJK7X&psc=1&qid=1591918932&s=home-garden&sr=1-1-22d05c05-1231-4126-b7c4-3e7a9c0027d0">
                  Premium Stainless Salt Pepper Grinder
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Utopia-Kitchen-Stainless-Cooking-5-Piece/dp/B06Y2CMMWL/ref=sr_1_3?dchild=1&keywords=kitchen+spoons+for+cooking+stainless+steel&qid=1591919418&s=home-garden&sr=1-3#HLCXComparisonWidget_feature_div">
                  Utopia Kitchen Stainless Cooking 5 Piece
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Healthy-Cooking-Utensils-Set-Eco-friendly/dp/B0785LCP1S/ref=sr_1_8?crid=3SMIK691V8NDG&dchild=1&keywords=wooden+spoons+for+cooking&qid=1591920316&s=home-garden&sprefix=wooden+s%2Cgarden%2C288&sr=1-8">
                  Healthy Cooking Utensils Set Eco friendly
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/packs-stainless-Servers-Kitchen-Helper/dp/B07X1X3QH8/ref=sr_1_11?dchild=1&keywords=salad+hands&qid=1592005444&s=home-garden&sr=1-11">
                  Packs stainless Servers Kitchen Helper
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Kitchen-Silicone-Non-Stick-Stainless-Grilling/dp/B074WB5D79/ref=sr_1_4?dchild=1&keywords=tongs&qid=1591991814&s=home-garden&sr=1-4">
                  Kitchen Silicone Non Stick Stainless Grilling
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Kaluns-Piece-Stainless-Measuring-Heavy-duty/dp/B07V1PXJ3G/ref=sr_1_1_sspa?dchild=1&keywords=measuring+cups&qid=1591996373&s=home-garden&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzTjBUN1lTUDZQSjdCJmVuY3J5cHRlZElkPUEwNDYyMzI3Mk9GRERHODg4VDlBSSZlbmNyeXB0ZWRBZElkPUEwNDg5MDI1MjE1NjE2TkdGTjc2UiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
                  Kaluns Piece Stainless Measuring Heavy-Duty
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Pyrex-Measuring-Cups-3-Piece-Clear/dp/B00M2J7PCI/ref=sr_1_2?crid=CVTXXYXHT7VK&dchild=1&keywords=pyrex+measuring+cup&qid=1592002134&s=home-garden&sprefix=pyrex+%2Cgarden%2C256&sr=1-2">
                  Pyrex Measuring Cups 3 Piece Clear
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Norpro-3009-Piece-Plastic-Spatula/dp/B000A3N7NE/ref=sr_1_8?dchild=1&keywords=white+spatula+set&qid=1591919965&s=home-garden&sr=1-8">
                  Norpro 3009 Piece Plastic Spatula
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Jamie-Oliver-Kitchen-Palette-Knife/dp/B072FJJ6JK/ref=sr_1_19?dchild=1&keywords=palette+knife&qid=1591920367&s=home-garden&sr=1-19">
                  Jamie Oliver Kitchen Palette Knife
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-Good-Grips-Swivel-Peeler/dp/B00004OCIP/ref=sr_1_4?dchild=1&keywords=vegetable+peeler&qid=1592002939&s=home-garden&sr=1-4">
                  OXO Good Grips Swivel Peeler
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-CTG-00-3MS-Stainless-Steel-Strainers/dp/B007TUQF9O/ref=sr_1_4?dchild=1&keywords=strainer&qid=1591920520&s=home-garden&sr=1-4">
                  Cuisinart CTG 00 3MS Stainless Steel Strainers
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a
                  href="https://www.amazon.com/ExcelSteel-Stainless-Steel-Colanders-Set/dp/B00FEDLBII/ref=sr_1_19?dchild=1&keywords=strainer&qid=1591920601&s=home-garden&sr=1-19
"
                >
                  ExcelSteel Stainless Steel Colanders Set
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Professional-Grater-Stainless-Parmesan-Vegetables/dp/B07GJYY78P/ref=redir_mobile_desktop?ie=UTF8&aaxitk=jqFeD0J9NLmslC10R8Zs0w&hsa_cr_id=5360579300801&ref_=sbx_be_s_sparkle_mcd_asin_1">
                  Professional Grater Stainless Parmesan Vegetables
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Best-Manufacturers-Standard-French-10-inch/dp/B00004R8ZL/ref=psdc_289774_t3_B00004R8ZK">
                  Best Manufacturers Standard French 10 inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-Grips-11-Inch-Better-Balloon/dp/B00004OCNS/ref=sr_1_2?dchild=1&keywords=balloon%2Bwhisk&qid=1592003757&s=home-garden&sr=1-2&th=1">
                  OXO Grips 11 Inch Better Balloon
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/KitchenAid-KC351OHGSA-Multi-Purpose-Scissors-Stainless/dp/B06XCGGRM8/ref=sr_1_4?dchild=1&keywords=kitchen+shears&qid=1591920939&s=home-garden&sr=1-4">
                  KitchenAid KC351OHGSA Multi Purpose Scissors Stainless
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Zeppoli-Classic-Kitchen-15-Pack-Natural/dp/B01IG8X9E6/ref=sr_1_4?dchild=1&keywords=kitchen+towels&qid=1591921189&s=home-garden&sr=1-4">
                  Zeppoli Classic Kitchen 15 Pack Natural
                </a>
              </p>
            </div>

            <div className="card">
              <p>
                <a href="https://www.amazon.com/Winware-Stainless-Steel-Scraper-Handle/dp/B0017HUR9E/ref=sr_1_7?dchild=1&keywords=bench+scraper&qid=1591921350&s=home-garden&sr=1-7">
                  Winware Stainless Steel Scraper Handle
                </a>
              </p>
            </div>
            <h3>Tools of Refinement</h3>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Winco-CCB-8R-Stainless-Reinforced-Bouillon/dp/B001L68ARC/ref=sxin_7?ascsubtag=amzn1.osa.5e2de221-96cf-41a2-af2a-88022aa87f94.ATVPDKIKX0DER.en_US&creativeASIN=B001L68ARC&cv_ct_cx=chinois&cv_ct_id=amzn1.osa.5e2de221-96cf-41a2-af2a-88022aa87f94.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=chinois&linkCode=oas&pd_rd_i=B001L68ARC&pd_rd_r=e69b008d-dccc-4bfa-a658-1aa08f07d2ab&pd_rd_w=qrhBx&pd_rd_wg=hKYab&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=FD37ADEVNM5549CKBCBS&qid=1591921452&s=home-garden&sr=1-1-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=atkamznsearch-20">
                  Winco CCB 8R Stainless Reinforced Bouillo
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Mrs-Andersons-Baking-Tamis-Sifter/dp/B0155ELTR8/ref=sr_1_3?dchild=1&keywords=tamis&qid=1591921554&s=home-garden&sr=1-3">
                  Mrs Andersons Baking Tamis Sifter
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-Good-Grips-Food-1071478/dp/B000I0MGKE/ref=sr_1_1?dchild=1&keywords=food+mill&qid=1592005175&s=home-garden&sr=1-1">
                  OXO Good Grips Food
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Microplane-Premium-stainless-zesting-grating/dp/B00151WA06/ref=sr_1_3?dchild=1&keywords=microplane&qid=1591921664&s=home-garden&sr=1-3&th=1">
                  Microplane Premium stainless zesting grating
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/R%C3%B6sle-Stainless-Steel-Food-Slicer/dp/B00008WVAV/ref=sr_1_2?dchild=1&keywords=rosle%2Bmandoline%2Bslicer&qid=1591921928&s=home-garden&sr=1-2&th=1">
                  Stainless Steel Food Slicer
                </a>
              </p>
            </div>
            <h3>Nice to Have</h3>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Wusthof-4522-7-23-B00009YBK6-B00009YBK6B00009YBK6B00009YBK6/dp/B00009YBK6/ref=sr_1_2?dchild=1&keywords=Wusthof+CLASSIC+Carving+Knife%2C+One+Size%2C+Black%2C+Stainless+Steel&qid=1591908845&s=home-garden&sr=1-2">
                  Wusthof Classic Carving Knife
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Wusthof-Classic-Double-Serrated-Bread-Knife/dp/B013QOMIPG/ref=sr_1_1?dchild=1&keywords=Wusthof+CLASSIC+Bread+Knife%2C+One+Size%2C+Black%2C+Stainless+Steel&qid=1591908989&s=home-garden&sr=1-1">
                  Wusthof Classic Double Serrated Bread Knife
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Creuset-Signature-Enameled-Cast-Iron-Marseille/dp/B00B4UOWQI/ref=sr_1_7?dchild=1&keywords=le+creuset+10+16+roasting+pan&qid=1591996014&s=home-garden&sr=1-7">
                  Creuset Signature Enameled Cast Iron Marseille
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Creuset-Heritage-Stoneware-Rectangular-Baking/dp/B07T9NPCCG/ref=sr_1_21?crid=2292DOVICWDHI&dchild=1&keywords=le+creuset+rectangle+dish&qid=1592001489&s=home-garden&sprefix=le+creuset+rectangle+%2Cgarden%2C277&sr=1-21">
                  Creuset Heritage Stoneware Rectangular Baking
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Pyrex-1107101-Basics-Oblong-Baking/dp/B00N1BYMLS/ref=sr_1_4?crid=362OV5BH9BSNO&dchild=1&keywords=pyrex+baking+dishes&qid=1592002494&s=home-garden&sprefix=pyrex+baking+%2Cgarden%2C528&sr=1-4">
                  Pyrex Basics Oblong Baking
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-AMB-9RCK-Classic-Nonstick-Bakeware/dp/B0000ULZX6/ref=sr_1_3?dchild=1&keywords=cake+pans&qid=1592002043&s=home-garden&sr=1-3">
                  Cuisinart AMB 9RCK Classic Nonstick Bakeware
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Lodge-Pro-Grid-Griddle-Reversible-Easy-Grip/dp/B00008GKDQ/ref=sxin_9?ascsubtag=amzn1.osa.07343eae-eee6-4493-b775-047636524a6e.ATVPDKIKX0DER.en_US&creativeASIN=B00008GKDQ&cv_ct_cx=grill+pan&cv_ct_id=amzn1.osa.07343eae-eee6-4493-b775-047636524a6e.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=grill+pan&linkCode=oas&pd_rd_i=B00008GKDQ&pd_rd_r=b490c3a1-1590-4bd4-95ee-079d2943e8a3&pd_rd_w=UAVOb&pd_rd_wg=YuSO9&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=11A92SZEAWFAHMB3T7YK&qid=1592005643&s=home-garden&sr=1-1-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=scrippsonsite-20">
                  Lodge Pro Grid Griddle Reversible Easy Grip
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Wilton-Perfect-Results-Non-Stick-Standard/dp/B07R81SX79/ref=sr_1_16?dchild=1&keywords=muffin+tins&qid=1592249356&s=home-garden&sr=1-16">
                  Wilton Perfect Results Non Stick Standard
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/USA-Pan-1140LF-Bakeware-Aluminized/dp/B0029JQEIC/ref=sr_1_2?dchild=1&keywords=bread+pan&qid=1592249834&s=home-garden&sr=1-2">
                  USA Pan 1140LF Bakeware Aluminized
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Pyrex-6-Ounce-Custard-Cups-Set/dp/B0000CF3UK/ref=sr_1_3?dchild=1&keywords=custard+cups&qid=1592002224&s=home-garden&sr=1-3">
                  Pyrex 6 Ounce Custard Cups Set
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Ramekin-Bakeware-Cooking-Porcelain-Ramikins/dp/B07RDK3K28/ref=sr_1_2?dchild=1&keywords=6+oz+ramekins&qid=1592004438&s=home-garden&sr=1-2">
                  Ramekin Bakeware Cooking Porcelain Ramikins
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/HIC-Gratin-Baking-Porcelain-10-Inch/dp/B005KMKSP0/ref=sr_1_1?dchild=1&keywords=individual+gratin+dishes&qid=1592004734&sr=8-1">
                  HIC Gratin Baking Porcelain 10 Inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-Good-Grips-Pizza-Server/dp/B01N9XVG9Q/ref=sxin_7?ascsubtag=amzn1.osa.c0e506d7-3427-4686-8a1c-08b3ebe5d93f.ATVPDKIKX0DER.en_US&creativeASIN=B01N9XVG9Q&cv_ct_cx=pie+server&cv_ct_id=amzn1.osa.c0e506d7-3427-4686-8a1c-08b3ebe5d93f.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=pie+server&linkCode=oas&pd_rd_i=B01N9XVG9Q&pd_rd_r=fdfcbedf-49f4-495b-a293-c456f7524657&pd_rd_w=AiKeO&pd_rd_wg=zPhM6&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=SXEFX2AFQK9HENSSDN8Q&qid=1592002415&s=home-garden&sr=1-1-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=21oak-20">
                  OXO Good Grips Pizza Server
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/ThermoPro-Digital-Thermometer-Grilling-Backlight/dp/B07MF18JHT/ref=dp_ob_title_kitchen">
                  ThermoPro Digital Thermometer Grilling Backlight
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a
                  href="https://www.amazon.com/OXO-Good-Grips-Apple-Corer/dp/B00004OCIQ/ref=sr_1_5?crid=52VJ6QFIMRAM&dchild=1&keywords=apple+corer&qid=1592249292&s=home-garden&sprefix=apple+co%2Cgarden%2C277&sr=1-5
"
                >
                  OXO Good Grips Apple Corer
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Norpro-942-Cotton-Twine/dp/B000ST1EW6/ref=sr_1_4?dchild=1&keywords=butcher+twine&qid=1592004956&s=home-garden&sr=1-4">
                  Norpro 942 Cotton Twine
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-1130900-Turner-Stainless-Comfortable/dp/B000YDO2MK/ref=sr_1_3?crid=3VK04PVDA5U3Q&dchild=1&keywords=peltex+fish+spatula&qid=1591991041&s=home-garden&sprefix=peltex+fish%2Cgarden%2C419&sr=1-3">
                  OXO 1130900 Turner Stainless Comfortable
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/AmazonBasics-Silicone-Baking-Mat-Sheet/dp/B0725GYNG6/ref=sr_1_1_sspa?dchild=1&keywords=silpat&qid=1591991235&s=home-garden&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRk1WR0ZHNkMxNEk2JmVuY3J5cHRlZElkPUEwMjM2NTYzMTVCOENFTTVQS0ZBQyZlbmNyeXB0ZWRBZElkPUEwODE5OTA1MTZOM0s0NFZDOVNMOSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">
                  AmazonBasics Silicone Baking Mat Sheet
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/HIC-Citrus-Juicer-Hardwood-6-5-Inches/dp/B00WDTC1KI/ref=sr_1_4?dchild=1&keywords=citrus+reamer&qid=1591991367&s=home-garden&sr=1-4">
                  HIC Citrus Juicer Hardwood 6 5 Inches
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Farberware-5211475-Professional-Dual-Sided-Tenderizer/dp/B07D18GZRL/ref=sr_1_7?crid=3371MDKONSXMV&dchild=1&keywords=meat%2Bmallet&qid=1591991487&s=home-garden&sprefix=meat%2Bmallet%2Cgarden%2C404&sr=1-7&th=1">
                  Farberware 5211475 Professional Dual Sided Tenderizer
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-35681-Oyster-Handle-Silver/dp/B00004OCLC/ref=sr_1_4?dchild=1&keywords=oyster+knife&qid=1591991733&s=home-garden&sr=1-4">
                  OXO 35681 Oyster Handle Silver
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Mercer-Culinary-M23800-Millennia-8-Inch/dp/B005P0OPVA/ref=sr_1_7?dchild=1&keywords=meat+fork&qid=1591991944&s=home-garden&sr=1-7">
                  Mercer Culinary M23800 Millennia 8 Inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/LEGERM-Decorating-Stainless-Frosting-Spatulas/dp/B01N3M4TPJ/ref=sr_1_2_sspa?crid=2CV4GRILQTJ98&dchild=1&keywords=offset+spatula&qid=1591992251&s=home-garden&sprefix=offset+spatual%2Cgarden%2C351&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySkE4R1g5U0tMQTMmZW5jcnlwdGVkSWQ9QTA2NDkwOTEyVk1IQ05MUzBIQTFHJmVuY3J5cHRlZEFkSWQ9QTAwNzcxODg0TDZOT1lWVjJZRlcmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl">
                  LEGERM Decorating Stainless Frosting Spatulas
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/TEMCHY-Hot-Pot-Skimmer-Spoon/dp/B06XP8LPCL/ref=sr_1_4?dchild=1&keywords=skimmer&qid=1591992855&s=home-garden&sr=1-4">
                  TEMCHY Hot Pot Skimmer Spoon
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/OXO-Good-Grips-Salad-Spinner/dp/B00004OCKR/ref=sr_1_3?dchild=1&keywords=salad+spinner&qid=1591992896&s=home-garden&sr=1-3">
                  OXO Good Grips Salad Spinner
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Winco-Pastry-Brush-1-1-2-Inch/dp/B001VZAQBQ/ref=sxin_9?ascsubtag=amzn1.osa.7ad8e424-f77e-4c6b-b1a4-8d78ab9168ed.ATVPDKIKX0DER.en_US&creativeASIN=B001VZAQBQ&crid=7IQM3R9R9ZS3&cv_ct_cx=pastry+brush&cv_ct_id=amzn1.osa.7ad8e424-f77e-4c6b-b1a4-8d78ab9168ed.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=pastry+brush&linkCode=oas&pd_rd_i=B001VZAQBQ&pd_rd_r=66605d59-35fa-4823-83be-9f11490a53b2&pd_rd_w=PJ2xW&pd_rd_wg=CaI6z&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=VSVZ7XRH45RX08TVXEQK&qid=1591992941&s=home-garden&sprefix=pastry+brush%2Cgarden%2C253&sr=1-1-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=atkamznsearch-20">
                  Winco Pastry Brush 1 1 2 Inch
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Bamber-Rolling-Baking-Wooden-Pastry/dp/B0197UNLW2/ref=redir_mobile_desktop?ie=UTF8&aaxitk=TbV-hBepBgrPCmor9cwFMw&hsa_cr_id=6841920600101&ref_=sbx_be_s_sparkle_mcd_asin_2&th=1">
                  Bamber Rolling Baking Wooden Pastry
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Adecco-LLC-Stainless-tweezer-precision/dp/B0836J52R2/ref=sr_1_1_sspa?crid=3TPDUQ59DAYFA&dchild=1&keywords=kitchen%2Btweezers&qid=1591993462&s=home-garden&sprefix=kitchen%2Btweezers%2Cgarden%2C289&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzT0EwMFg0MDVEOExJJmVuY3J5cHRlZElkPUEwNDUwNjYyMUc1RElDU1NNWFEzVCZlbmNyeXB0ZWRBZElkPUEwNjM5MzY4MUpPVFlKWlFSN0tUNCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1">
                  Adecco LLC Stainless tweezer precision
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Norpro-335-Nutmeg-Grater/dp/B0000CFOTJ/ref=sr_1_5?dchild=1&keywords=nutmeg+grinder&qid=1592249885&s=home-garden&sr=1-5">
                  Norpro 335 Nutmeg Grater
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Ultra-Cuisine-Stainless-Cooling-Cookies/dp/B00R0M2TSC/ref=sr_1_1_sspa?dchild=1&keywords=wire+cake+rack&qid=1591993645&s=home-garden&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNDZBQzg0Tkw3WjJLJmVuY3J5cHRlZElkPUEwMzg1Mzc0M1BGMFowRzNBUDBLSyZlbmNyeXB0ZWRBZElkPUEwOTA5MTEwUTNRNjZYM1FFS0gxJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
                  Ultra Cuisine Stainless Cooling Cookies
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Sondiko-Culinary-Refillable-Adjustable-Desserts/dp/B07L8YPYQK/ref=sr_1_1_sspa?crid=EI57UOX8H22O&dchild=1&keywords=blow+torch&qid=1592005950&s=home-garden&sprefix=blow+torch%2Cgarden%2C340&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSDY3MkpPU1ZUWVJZJmVuY3J5cHRlZElkPUEwNTI3MzA3MjU3UTJES083SEFBQyZlbmNyeXB0ZWRBZElkPUEwNTE5MjEwMVZRN1o5QkNPM0ExJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">
                  Sondiko Culinary Refillable Adjustable Desserts
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a
                  href="
https://www.amazon.com/Vitamix-62827-Prep-Food-Blender/dp/B06XV2KGHR/ref=sr_1_1?dchild=1&keywords=vita+prep&qid=1591993866&s=home-garden&sr=1-1
"
                >
                  Vitamix 62827 Prep Food Blender
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-DFP-14BCNY-Processor-Brushed-Stainless/dp/B01AXM4WV2/ref=sxin_9?ascsubtag=amzn1.osa.3a6f9840-9e5c-436f-9b77-f3c4051345f9.ATVPDKIKX0DER.en_US&creativeASIN=B01AXM4WV2&cv_ct_cx=cuisinart+food+processor&cv_ct_id=amzn1.osa.3a6f9840-9e5c-436f-9b77-f3c4051345f9.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_wn=osp-single-source-pr&dchild=1&keywords=cuisinart+food+processor&linkCode=oas&pd_rd_i=B01AXM4WV2&pd_rd_r=ad09e926-f9c5-49e7-bc98-e60bf55d0248&pd_rd_w=I5WuC&pd_rd_wg=YcaiH&pf_rd_p=9ebd9ae2-bfc3-4cf2-a615-92a580f06e16&pf_rd_r=ZP1GJQBHBH4FM3MS677G&qid=1591994208&s=home-garden&sr=1-2-8721a5c9-6336-4af6-a717-e9b9e6c2f75f&tag=popularscience_os-20">
                  Cuisinart DFP 14BCNY Processor Brushed Stainless
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Anova-Culinary-AN500-US00-Precision-Included/dp/B07WQ4M5TS/ref=sr_1_4?dchild=1&keywords=sous+vide&qid=1592249710&s=home-garden&sr=1-4">
                  Anova Culinary AN500 US00 Precision Included
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/All-Clad-Stainless-Immersion-Detachable-600-Watts/dp/B007R2E47Y/ref=sr_1_1?crid=2W8NQD6HVRCFB&dchild=1&keywords=all+clad+immersion+blender&qid=1591994421&s=home-garden&sprefix=all+immersion+blender%2Cgarden%2C262&sr=1-1">
                  All Clad Stainless Immersion Detachable 600 Watts
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/KRUPS-Electric-Coffee-Grinder-Stainless/dp/B00004SPEU/ref=zg_bs_14092821_1?_encoding=UTF8&psc=1&refRID=1VXX0D0CNZ8QEWYG6TNW">
                  KRUPS Electric Coffee Grinder Stainless
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/KitchenAid-KSM150PSPT-Artisan-Pouring-Shield/dp/B00006WNOZ/ref=sr_1_2?crid=3FA811VSLZZCB&dchild=1&keywords=kitchenaid%2Bstand%2Bmixer&qid=1591995032&s=home-garden&sprefix=kitchen%2Baide%2Bstand%2Bmixers%2Cgarden%2C436&sr=1-2&th=1">
                  KitchenAid KSM150PSPT Artisan Pouring Shield
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Crock-Pot-SCV700SS-Stainless-7-Quart-Manual/dp/B003OAJGJO/ref=sr_1_4?dchild=1&keywords=crockpot&qid=1592249522&s=home-garden&sr=1-4">
                  Crock Pot SCV700SS Stainless 7 Quart Manual
                </a>
              </p>
            </div>
            <div className="card">
              <p>
                <a href="https://www.amazon.com/Cuisinart-ICE-21-Quart-Frozen-Yogurt-Ice/dp/B003KYSLMW/ref=sr_1_5?crid=2C7YBY6WC008W&dchild=1&keywords=ice+cream+machine&qid=1592006606&s=home-garden&sprefix=ice+cream+machine%2Cgarden%2C253&sr=1-5">
                  Cuisinart ICE 21 Quart Frozen Yogurt Ice
                </a>
              </p>
            </div>
          </div>
        </Section>
      </StyledFavorites>
      <Gallery />
    </Layout>
  )
}

const StyledFavorites = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
  h3 {
    width: 100%;
    margin: 1rem 0rem;
  }
  .tool-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    .card {
      p a {
        color: var(--darkGray);
        &:hover {
          color: var(--mainColor);
        }
      }
    }
  }
`

export default Favorites
