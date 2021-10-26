- Class Component Create
  constructor() // 생성됨
  static getDerivedStateFromProps() //?
  render() // 랜더링 중
  componentDidMount() // 랜더링 완료

- Class Component Update
  static getDerivedStateFromProps() //?
  shouldComponentUpdate() // 업데이트 할지 말지.. 결정, 모든 setState 호출 시마다 발생
  render()
  getSnapshotBeforeUpdate() // 사용 XX
  componentDidUpdate() // 업데이트 이후 사용

- Class Component Unmount (죽음)
  componentWillUnmount() // Component go away 새로고침 혹은 페이지 이동 시..
