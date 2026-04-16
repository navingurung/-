```javascript
"use client";

import Link from "next/link";
import {
  Building2,
  KeyRound,
  Mail,
  MapPin,
  Phone,
  Store,
  User,
  CircleUserRound,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import StoresTable from "./stores-table";
import { type Stores } from "./columns";

export default function AccountDetailClient({
  storeDetails,
  companyDetails,
}: {
  storeDetails: Stores[];
  companyDetails: any;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-4 sm:px-4 sm:py-6 lg:px-6">
      <div className="space-y-5 sm:space-y-6">
        <div className="min-w-0 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            アカウント
          </h1>
          <p className="text-sm leading-6 text-muted-foreground">
            登録されている事業者情報・ログイン情報・免税店情報
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.6fr_0.9fr]">
          <div className="min-w-0 space-y-5">
            {/* Mobile: 事業者情報 accordion */}
            <div className="block sm:hidden">
              <MobileSectionAccordion
                value="business-info"
                icon={<Building2 className="h-4 w-4" />}
                title="事業者情報"
                description="事業者として登録されている基本情報です。"
              >
                <div className="grid grid-cols-1 gap-3">
                  <InfoField
                    icon={<Building2 className="h-4 w-4" />}
                    label="事業者名"
                    value={companyDetails?.biz_name}
                  />
                  <InfoField
                    icon={<Building2 className="h-4 w-4" />}
                    label="事業者名フリガナ"
                    value={companyDetails?.biz_name_kana}
                  />
                  <InfoField
                    icon={<MapPin className="h-4 w-4" />}
                    label="事業者所在地"
                    value={companyDetails?.biz_place}
                  />
                  <InfoField
                    icon={<MapPin className="h-4 w-4" />}
                    label="事業者所在地フリガナ"
                    value={companyDetails?.biz_place_kana}
                  />
                  <InfoField
                    icon={<User className="h-4 w-4" />}
                    label="代表者氏名"
                    value={companyDetails?.manager_name}
                  />
                  <InfoField
                    icon={<User className="h-4 w-4" />}
                    label="代表者氏名フリガナ"
                    value={companyDetails?.manager_name_kana}
                  />
                  <InfoField
                    icon={<Phone className="h-4 w-4" />}
                    label="電話番号"
                    value={companyDetails?.manager_phone}
                  />
                  <InfoField
                    icon={<Mail className="h-4 w-4" />}
                    label="Emailアドレス"
                    value={companyDetails?.manager_email}
                  />
                </div>
              </MobileSectionAccordion>
            </div>

            {/* Desktop: 事業者情報 normal card */}
            <div className="hidden sm:block">
              <SectionCard
                icon={<Building2 className="h-4 w-4" />}
                title="事業者情報"
                description="事業者として登録されている基本情報です。"
              >
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <InfoField
                    icon={<Building2 className="h-4 w-4" />}
                    label="事業者名"
                    value={companyDetails?.biz_name}
                  />
                  <InfoField
                    icon={<Building2 className="h-4 w-4" />}
                    label="事業者名フリガナ"
                    value={companyDetails?.biz_name_kana}
                  />
                  <InfoField
                    icon={<MapPin className="h-4 w-4" />}
                    label="事業者所在地"
                    value={companyDetails?.biz_place}
                    fullWidth
                  />
                  <InfoField
                    icon={<MapPin className="h-4 w-4" />}
                    label="事業者所在地フリガナ"
                    value={companyDetails?.biz_place_kana}
                    fullWidth
                  />
                  <InfoField
                    icon={<User className="h-4 w-4" />}
                    label="代表者氏名"
                    value={companyDetails?.manager_name}
                  />
                  <InfoField
                    icon={<User className="h-4 w-4" />}
                    label="代表者氏名フリガナ"
                    value={companyDetails?.manager_name_kana}
                  />
                  <InfoField
                    icon={<Phone className="h-4 w-4" />}
                    label="電話番号"
                    value={companyDetails?.manager_phone}
                  />
                  <InfoField
                    icon={<Mail className="h-4 w-4" />}
                    label="Emailアドレス"
                    value={companyDetails?.manager_email}
                  />
                </div>
              </SectionCard>
            </div>
          </div>

          <div className="min-w-0 space-y-5">
            {/* Mobile: ログイン情報 accordion */}
            <div className="block sm:hidden">
              <MobileSectionAccordion
                value="login-info"
                icon={<KeyRound className="h-4 w-4" />}
                title="ログイン情報"
                description="ログインに使用する情報です。"
              >
                <div className="space-y-3">
                  <InfoField
                    icon={<CircleUserRound className="h-4 w-4" />}
                    label="ログインID"
                    value={companyDetails?.login_id}
                  />
                  <InfoField
                    icon={<KeyRound className="h-4 w-4" />}
                    label="パスワード"
                    value="********"
                  />
                </div>
              </MobileSectionAccordion>
            </div>

            {/* Desktop: ログイン情報 normal card */}
            <div className="hidden sm:block">
              <SectionCard
                icon={<KeyRound className="h-4 w-4" />}
                title="ログイン情報"
                description="ログインに使用する情報です。"
              >
                <div className="space-y-3">
                  <InfoField
                    icon={<CircleUserRound className="h-4 w-4" />}
                    label="ログインID"
                    value={companyDetails?.login_id}
                  />
                  <InfoField
                    icon={<KeyRound className="h-4 w-4" />}
                    label="パスワード"
                    value="********"
                  />
                </div>
              </SectionCard>
            </div>

            <Card className="min-w-0 border shadow-none">
              <CardContent className="p-4 sm:p-5">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-primary/10 p-2 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 space-y-2">
                    <p className="text-sm font-medium">
                      登録内容の変更について
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      登録されている内容を変更したい場合は、
                      <Link
                        href="/contact"
                        className="mx-1 font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                      >
                        お問い合わせ
                      </Link>
                      よりご連絡ください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="min-w-0">
          <SectionCard
            icon={<Store className="h-4 w-4" />}
            title="免税店情報"
            description={`登録店舗数：${storeDetails?.length ?? 0}件`}
          >
            <div className="min-w-0 overflow-hidden rounded-xl border">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[640px]">
                  <StoresTable data={storeDetails} />
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

function MobileSectionAccordion({
  value,
  icon,
  title,
  description,
  children,
}: {
  value: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border shadow-none">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={value} className="border-b-0">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex min-w-0 items-start gap-3 text-left">
              {icon ? (
                <div className="shrink-0 rounded-md bg-primary/10 p-2 text-primary">
                  {icon}
                </div>
              ) : null}

              <div className="min-w-0 space-y-1">
                <p className="text-base font-semibold">{title}</p>
                {description ? (
                  <p className="text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-4 pb-4">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

function SectionCard({
  icon,
  title,
  description,
  children,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="min-w-0 border shadow-none">
      <CardHeader className="pb-4">
        <div className="flex min-w-0 items-start gap-3">
          {icon ? (
            <div className="shrink-0 rounded-md bg-primary/10 p-2 text-primary">
              {icon}
            </div>
          ) : null}

          <div className="min-w-0 space-y-1">
            <CardTitle className="text-base font-semibold sm:text-lg">
              {title}
            </CardTitle>
            {description ? (
              <CardDescription className="text-sm leading-6 text-muted-foreground">
                {description}
              </CardDescription>
            ) : null}
          </div>
        </div>
      </CardHeader>

      <CardContent className="min-w-0 p-4 pt-0 sm:p-6 sm:pt-0">
        {children}
      </CardContent>
    </Card>
  );
}

function InfoField({
  icon,
  label,
  value,
  fullWidth = false,
}: {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "min-w-0 md:col-span-2" : "min-w-0"}>
      <div className="min-w-0 rounded-lg border bg-background px-3 py-3 sm:px-4">
        <div className="mb-2 flex min-w-0 items-center gap-2 text-xs font-medium text-muted-foreground">
          {icon ? <span className="shrink-0">{icon}</span> : null}
          <span className="truncate">{label}</span>
        </div>

        <p className="min-w-0 break-all text-sm font-medium leading-6 text-foreground">
          {value || "未設定"}
        </p>
      </div>
    </div>
  );
}
```
