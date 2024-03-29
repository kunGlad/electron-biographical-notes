export interface TStore {
  /**
   * @description 选中工具条模块的keys
   */
  resumeToolbarKeys: string[];
}

const templateModel: TSRcReduxModel.Props<TStore> = {
  namespace: 'templateModel',
  openSeamlessImmutable: true,
  state: {
    resumeToolbarKeys: [], // 选中工具条模块的keys
  },
};

export default templateModel;
