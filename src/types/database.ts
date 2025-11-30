export interface Region {
  id: string;
  name: string;
  created_at: string;
}

export interface RegionsResponse {
  success: boolean;
  data: Region[];
  source: 'supabase' | 'dummy';
  count?: number;
  message?: string;
}