```javascript
"use client";

import RefundDetailClient from "./refund-details";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeaderDetail } from "@/components/site-header-detail";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner"; 

export default function RefundDetailPage() {
  const params = useParams<{ id: string }>();
  const [refund, setRefund] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getOrderDetail = async (id: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/refundlist/company-detail/${id}`,
      );
      setRefund(response.data);
    } catch (err: any) {
      console.error("Failed to fetch order detail:", err);
      if (err.response?.status === 404) {
        toast.warning("データが見つかりません!")
      } else if (err.response?.status === 401) {
        toast.error("認証エラーが発生しました。");
      } else {
        toast.error("データの取得に失敗しました");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      getOrderDetail(params.id);
    }
  }, [params.id]);
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeaderDetail id={params.id || "読込中..."} />
        <div className="flex flex-1 flex-col">
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Spinner className="h-8 w-8" />
              <p className="ml-2">読込中...</p>
            </div>
          ) : refund?.refund ? (
            <RefundDetailClient refund={refund.refund}

            // 取消後に最新データを再取得するためのコールバック
            onRefresh= {()=> getOrderDetail(params.id)}
            />
          ) : (
            <div className="flex items-center justify-center p-8">
              <p className="animate-bounce">⚠️ データが見つかりません。</p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


```
