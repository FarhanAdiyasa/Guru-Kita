export interface Region {
  id: string;
  name: string;
  province: string;
  created_at: string;
}

export interface TeacherSalary {
  id: string;
  region_id: string;
  school_level: 'SD' | 'SMP' | 'SMA';
  employment_status: 'PNS' | 'Honorer' | 'P3K';
  years_experience: number;
  monthly_salary: number;
  is_verified: boolean;
  created_at: string;
}

export interface SalaryWithRegion extends TeacherSalary {
  region: Region;
}