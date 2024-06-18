
// 登录校验规则
export interface loginParamsType {
	password: string
	username: string
}
export type ApifoxModel = {
    /**
     * 10000成功,其他失败
     */
    code: number;
    data: Data;
    /**
     * 提示信息
     */
    msg: string;
 
}

export type Data = {
    /**
     * 年度累计收入
     */
    annualIncome: number;
    annualIncomeArray: AnnualIncomeArray;
    /**
     * 一体杆总数
     */
    chargePoleTotal: number;
    /**
     * 企业总数
     */
    enterpriseTotal: number;
    /**
     * 月卡总数
     */
    monthCardTotal: number;
;
}

export type AnnualIncomeArray = {
    /**
     * x轴-月份
     */
    xMonth: number[];
    /**
     * 园区收入
     */
    yBuilding: string[];
    /**
     * 车行收入
     */
    yParking: number[];
}
