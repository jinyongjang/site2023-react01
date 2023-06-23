import React from "react";

const IntroCont = () => {
  return (
    <main>
      <div className="intro__wrap container gmarket section">
        <div className="introcard1">
          <div className="introImg"></div>
          <div className="introDesc">
            <h1>About</h1>
            <p>
              리액트(React)는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript
              라이브러리입니다. 페이스북(Facebook)에서 개발되었으며, 웹
              애플리케이션의 UI를 구성하는 데 사용됩니다. 리액트는 컴포넌트 기반
              아키텍처를 사용하여 UI를 작은 재사용 가능한 조각으로 분할하고
              관리할 수 있습니다. 리액트는 가상 DOM(Virtual DOM)을 활용하여
              효율적인 UI 업데이트를 가능하게 합니다. 가상 DOM은 실제 DOM과
              동기화되지만, 변경 사항을 최소화하여 성능 향상을 이룰 수 있습니다.
              리액트는 컴포넌트의 상태(State)와 속성(Properties)을 관리하고,
              상태가 변경될 때 적절한 UI 업데이트를 자동으로 처리합니다.
              리액트는 JSX라는 문법을 사용하여 JavaScript 코드 안에 XML과 유사한
              구문을 작성할 수 있게 합니다. JSX는 리액트 요소를 정의하고
              렌더링하는 데 사용되며, 컴포넌트를 더 쉽게 작성하고 읽을 수 있도록
              도와줍니다.
            </p>
          </div>
        </div>
        <div className="introCard2">
          <h1>History</h1>
          <p>
            2011년: 리액트의 초기 버전인 "FaxJS"가 개발되었습니다. 이는 XHP
            프레임워크의 일부로 사용되었습니다.
            <br />
            2013년: 페이스북에서 내부적으로 리액트를 사용하기 시작하였고, 5월에
            페이스북 뉴스피드의 일부분으로 처음 사용되었습니다.
            <br />
            2015년: 페이스북은 리액트를 오픈소스로 공개하였습니다. 이후, 전 세계
            개발자들이 리액트를 사용하여 웹 애플리케이션을 개발할 수 있게
            되었습니다.
            <br />
            2016년: 리액트 네이티브(React Native)가 공개되었습니다. 리액트
            네이티브는 리액트를 사용하여 iOS 및 Android용 네이티브 모바일
            애플리케이션을 개발하는 데 사용됩니다.
            <br />
            2018년: 리액트 16 버전이 출시되었습니다. 이 버전에서는 리액트
            훅(Hooks)이 도입되었으며, 함수형 컴포넌트에서 상태와 다른 리액트
            기능을 사용할 수 있게 되었습니다.
            <br />
            2020년: 리액트 17 버전이 출시되었습니다. 이 버전은 주요 변경 사항을
            도입하지 않았으며, 주로 안정성과 호환성에 중점을 둔
            업데이트였습니다.
            <br />
            <br />
            현재: 리액트는 지속적으로 개발 및 업데이트되고 있습니다. 페이스북 및
            커뮤니티의 지원과 개발자 생태계의 확장으로 인해 많은 개발자들이
            리액트를 사용하여 웹 및 모바일 애플리케이션을 구축하고 있습니다.
            리액트는 컴포넌트 기반 아키텍처와 가상 DOM 등의 특징을 통해 성능,
            유지보수성 및 재사용성을 제공하여 많은 인기를 얻고 있습니다.
          </p>
        </div>
        <div className="introcard3">
          <h1>Functions</h1>
          <p>
            가상 DOM(Virtual DOM): 리액트는 가상 DOM을 사용하여 UI를 관리합니다.
            가상 DOM은 실제 DOM과 동기화되는 가벼운 복사본으로서, 변경 사항을
            효율적으로 감지하고 필요한 부분만 업데이트하는 방식으로 성능을
            최적화합니다.
            <br />
            컴포넌트 기반 아키텍처: 리액트는 컴포넌트 기반 아키텍처를 사용하여
            UI를 작은 독립적인 조각으로 분할합니다. 각 컴포넌트는 자체적으로
            상태(state)와 속성(props)을 가지며, 재사용 가능하고 유지보수가
            용이합니다.
            <br />
            JSX: JSX는 JavaScript의 확장 문법으로, 리액트에서 UI 구성을 위해
            사용됩니다. JSX는 HTML과 유사한 구문을 사용하여 컴포넌트의 렌더링을
            표현할 수 있습니다. 단방향 데이터 흐름: 리액트는 단방향 데이터
            흐름을 지향합니다. 상위 컴포넌트에서 하위 컴포넌트로 데이터를
            전달하고, 하위 컴포넌트는 전달받은 데이터를 변경하지 않고 표시하는
            방식입니다. 이를 통해 애플리케이션의 상태 변화를 추적하고 예측
            가능한 UI를 구현할 수 있습니다.
            <br />
            조건부 렌더링: 리액트에서는 조건부 렌더링을 통해 특정 조건에 따라
            다른 컴포넌트나 요소를 렌더링할 수 있습니다. 이를 통해 동적인 UI를
            만들거나 상태에 따라 다른 화면을 표시할 수 있습니다. 이벤트 처리:
            리액트는 이벤트 처리를 위한 간편한 방법을 제공합니다. 이벤트
            핸들러를 컴포넌트에 연결하고, 이벤트가 발생했을 때 상태를
            업데이트하거나 다른 작업을 수행할 수 있습니다. 생명주기 메서드:
            리액트 컴포넌트는 생명주기 메서드를 가지고 있어 컴포넌트의 생성,
            업데이트, 소멸 등의 단계에서 특정 작업을 수행할 수 있습니다. 이를
            통해 초기화, 데이터 로딩, 상태 업데이트 등의 작업을 관리할 수
            있습니다.
            <br />
            상태 관리: 리액트는 컴포넌트의 상태를 관리하기 위한 기능을
            제공합니다. 컴포넌트의 상태를 변경하면 리액트는 자동으로 UI를
            업데이트하고 필요한 부분만 다시 렌더링합니다. 이를 통해 복잡한 상태
            관리를 간소화하고 성능을 최적화할 수 있습니다.
            <br />
            리액트 라우터(React Router): 리액트 라우터는 싱글 페이지
            애플리케이션(Single Page Application)에서 라우팅을 관리하기 위한
            라이브러리입니다. URL을 기반으로 특정 컴포넌트를 렌더링하고,
            브라우저의 뒤로가기와 같은 동작을 지원합니다.
          </p>
        </div>
      </div>
    </main>
  );
};

export default IntroCont;
