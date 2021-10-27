# React

## Introduction of React

React 라이브러리는 SPA(Single Page Application)으로, url 이 바뀌어도 모든 새로운 http를 다시 그려주지 않게 되어, 화면 깜박임이 줄어들어 앱과 같은 경험을 제공한다는 장점이 있습니다.

또한 이 React는 CSR(Client Side Rendering) 방식으로 작동합니다.
Server에서 html 파일을 받아오는 것이 아니라, Server는 비어있는 html에 응답하고 클라이언트 쪽에서 화면을 그리게 됩니다.

React는 build를 할 때 자신이 짠 코드를 하나의 Javascript File 로 만들어줍니다.
예를 들면 bundle.js 라는 파일을 Server 에서 User가 받아서 Rendering 하게 되는 것입니다.

하지만 여기서 문제점은,
앱의 규모가 커지면 이 bundle.js의 파일 크기가 엄청나게 커진다는 점입니다.

이러한 문제점을 해결할 수 있는 방법은
React 를 이용하되 bundle.js 의 구조를 변경하거나
Next.js 를 도입하는 거입니다.

출처 : Minji.dev[https://velog.io/@bbio3o/Next.js%EB%9E%80]

## function or class

- 위 둘은 React가 Javascript를 통해서 Rendering을 하는 두 가지 방법이다.

- [function]은 Static하고 DB에서 데이터를 기다릴 필요가 없는 부분에 사용하고 [class]는 dynamic하고 DB에서 데이터를 받을 필요가 있는 부분에 사용하도록 하자.

### function

- express 프레임워크에서 사용했던 방식과 동일하되, 나는 기본적으로 static 한 정보만을 받기로 하였기 때문에 별도의 비동기 처리를 하지 않는 균일성을 지켜보자.

### class

- react의 가장 큰 특징인 SPA의 핵심은 Dynamic Data를 받아오는 것인데, 이는 class의 inheritance 개념을 이용한 것이다. React.Component를 상속시킨 클래스로 랜더링을 하자.

#### React.Component

- 컴포넌트는 런더링의 전후에 여러 가지 단계를 만들어 두고 있다.

- 크게 나누면 Create/생성 Update/업데이트 Unmount/제거로 이루어져있다.

- Create에서 가장 중요한 개념은 render()과 componentDidMount()이다.

- Update에서 가장 중요한 개념은 shouldComponentUpdate()와 componentDidUpdate()이다.

- Unmount에서 가장 중요한 개념은 componentWillUnmount() 이다.

##### React.Component More

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

# Next

사용자가 처음 들어왔을 때의 페이지는 서버에서 받아 랜더링하고,
그 뒤의 라우팅 처리는 CSR(Client Side Rendering) 방식을 이용하는 기술

출처 : Minji.dev[https://velog.io/@bbio3o/Next.js%EB%9E%80]

## Introduction of Next
